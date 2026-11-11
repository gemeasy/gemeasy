import json, numpy as np, soundfile as sf
from kokoro_onnx import Kokoro
k=Kokoro("/tmp/claude-0/kok/kokoro-int8.onnx","/tmp/claude-0/kok/voices.bin")
L=json.load(open("lines.json")); sr=24000; out=[]; t=0.6; segs=[]
gap=np.zeros(int(0.35*sr),dtype=np.float32)
audio=[np.zeros(int(0.6*sr),dtype=np.float32)]
for l in L:
    s,sr=k.create(l["hi"],voice=l["v"],speed=1.0 if l["who"]=="G" else 1.05,lang="hi")
    s=s.astype(np.float32); d=len(s)/sr
    segs.append({**l,"start":t,"end":t+d}); audio+= [s,gap]; t+=d+0.35
audio.append(np.zeros(int(1.2*sr),dtype=np.float32))
a=np.concatenate(audio); a=a/np.max(np.abs(a))*0.9
sf.write("voice.wav",a,sr)
fps=30; n=int(len(a)/sr*fps)+1; hop=sr//fps
env=[float(np.sqrt(np.mean(a[i*hop:(i+1)*hop]**2))) if i*hop<len(a) else 0 for i in range(n)]
m=np.percentile([e for e in env if e>0.01],90); env=[min(1,e/m) for e in env]
json.dump({"segs":segs,"env":env,"dur":len(a)/sr,"fps":fps},open("timing.json","w"))
print(len(a)/sr, [(s["who"],round(s["start"],2),round(s["end"],2)) for s in segs])
