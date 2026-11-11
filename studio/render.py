import json, asyncio, os, sys
from playwright.async_api import async_playwright
T=json.load(open('timing.json')); n=int(T['dur']*T['fps'])
os.makedirs('frames',exist_ok=True)
only=[int(x) for x in sys.argv[1:]]
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(); pg=await b.new_page(viewport={'width':1080,'height':1920})
    await pg.goto('file://'+os.path.abspath('scene.html')); await pg.evaluate('t=>{T=t}',T)
    await pg.evaluate('document.fonts.ready')
    for i in (only or range(n)):
      await pg.evaluate(f'render({i})'); await pg.screenshot(path=f'frames/f{i:05d}.jpg',type='jpeg',quality=90)
    await b.close()
asyncio.run(main())
