import json,asyncio,os,numpy as np,subprocess
T=json.load(open('t.json'));fps=T['fps'];n=int(T['dur']*fps)
raw=subprocess.run(['ffmpeg','-loglevel','error','-i','voice.mp3','-ac','1','-ar','24000','-f','s16le','-'],capture_output=True).stdout
a=np.frombuffer(raw,np.int16).astype(np.float32)/32768;hop=24000//fps
E=[float(np.sqrt(np.mean(a[k*hop:(k+1)*hop]**2))) if k*hop<len(a) else 0 for k in range(n)];m=np.percentile([x for x in E if x>0.01],90);E=[min(1,x/m) for x in E]
from playwright.async_api import async_playwright
os.makedirs('fr',exist_ok=True)
import sys;only=[int(x) for x in sys.argv[1:]]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch();pg=await b.new_page(viewport={'width':1080,'height':1920})
    await pg.goto('file://'+os.path.abspath('ad.html'));await pg.evaluate('([t,e])=>{T=t;E=e}',[T,E]);await pg.evaluate('document.fonts.ready')
    await pg.wait_for_timeout(500)
    for i in (only or range(n)):
      await pg.evaluate(f'render({i})');await pg.screenshot(path=f'fr/f{i:05d}.jpg',type='jpeg',quality=90)
    await b.close()
asyncio.run(main())
