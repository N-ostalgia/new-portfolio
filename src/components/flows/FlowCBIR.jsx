import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowCBIR() {
  const nodes = [
    {id:"c1", type:"rf", position:{x:130,y:10},  data:{label:"Image Upload",    sub:"React frontend",active:true}},
    {id:"c2", type:"rf", position:{x:130,y:100},  data:{label:"Flask REST API",  sub:"POST /search",active:true}},
    {id:"c3", type:"rf", position:{x:130,y:190},  data:{label:"Preprocessing",   sub:"resize / normalize"}},
    {id:"c4", type:"rf", position:{x:130,y:280},  data:{label:"ResNet50",        sub:"pre-trained ImageNet",active:true,size:"lg"}},
    {id:"c5", type:"rf", position:{x:130,y:370},  data:{label:"2048-dim Vector", sub:"deep feature map"}},
    {id:"c6", type:"rf", position:{x:130,y:460},  data:{label:"Cosine Similarity",sub:"vs. product database",active:true}},
    {id:"c7", type:"rf", position:{x:0,y:560},    data:{label:"Top-1",           sub:"best match",color:"rgba(74,222,128,.45)"}},
    {id:"c8", type:"rf", position:{x:100,y:560},  data:{label:"Top-2",           sub:"match"}},
    {id:"c9", type:"rf", position:{x:200,y:560},  data:{label:"Top-3",           sub:"match"}},
    {id:"c10",type:"rf", position:{x:300,y:560},  data:{label:"Top-K",           sub:"ranked list"}},
    {id:"c11",type:"rf", position:{x:130,y:650},  data:{label:"Results Grid",    sub:"React frontend UI",active:true}},
  ];
  const edges = [
    mkE("ce1","c1","c2",{animated:true}),
    mkE("ce2","c2","c3",{animated:true}),
    mkE("ce3","c3","c4",{animated:true}),
    mkE("ce4","c4","c5",{animated:true,label:"feature vector"}),
    mkE("ce5","c5","c6",{animated:true}),
    mkE("ce6","c6","c7",{animated:true}), mkE("ce7","c6","c8"), mkE("ce8","c6","c9"), mkE("ce9","c6","c10"),
    mkE("ce10","c7","c11",{animated:true}), mkE("ce11","c8","c11"), mkE("ce12","c9","c11"), mkE("ce13","c10","c11"),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}