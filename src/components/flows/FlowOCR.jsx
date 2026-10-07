import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowOCR() {
  const nodes = [
    {id:"o1", type:"rf", position:{x:160,y:0}, data:{label:"Product Image", sub:"label photo",active:true,size:"lg"}},
    {id:"o2", type:"rf", position:{x:160,y:100}, data:{label:"YOLOv8", sub:"label detection · mAP50 0.991",active:true,size:"lg"}},
    {id:"o3", type:"rf", position:{x:160,y:200}, data:{label:"Label Region", sub:"detected crop"}},
    {id:"o4", type:"rf", position:{x:160,y:300}, data:{label:"Fine-tuned TrOCR", sub:"text recognition · CER 0.0054",active:true,size:"lg"}},
    {id:"o5", type:"rf", position:{x:160,y:400}, data:{label:"Extracted Text", sub:"96% exact match",active:true}},
    {id:"o6", type:"rf", position:{x:0,y:200}, data:{label:"PaddleOCR", sub:"offline fallback"}},
    {id:"o7", type:"rf", position:{x:0,y:300}, data:{label:"Ollama · Mistral", sub:"local fallback"}},
    {id:"o8", type:"rf", position:{x:0,y:400}, data:{label:"Offline Results", sub:"local extraction"}},
  ];
  const edges = [
    mkE("eo1","o1","o2",{animated:true}),
    mkE("eo2","o2","o3",{animated:true}),
    mkE("eo3","o3","o4",{animated:true}),
    mkE("eo4","o4","o5",{animated:true}),
    mkE("eo5","o3","o6",{label:"fallback"}),
    mkE("eo6","o6","o7",{animated:true}),
    mkE("eo7","o7","o8",{animated:true}),
  ];

  return <RFWrap nodes={nodes} edges={edges} />;
}