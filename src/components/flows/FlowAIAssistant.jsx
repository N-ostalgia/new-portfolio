import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowAIAssistant() {
  const nodes = [
    {id:"a1", type:"rf", position:{x:145,y:0}, data:{label:"Shell Command", sub:"user input",active:true,size:"lg"}},
    {id:"a2", type:"rf", position:{x:145,y:90}, data:{label:"Safety Checks", sub:"whitelist · hard rules",active:true}},
    {id:"a3", type:"rf", position:{x:300,y:190}, data:{label:"DistilBERT", sub:"risk classification",active:true,size:"lg"}},
    {id:"a4", type:"rf", position:{x:300,y:285}, data:{label:"Risk Explanation", sub:"verdict · confidence · severity"}},
    {id:"a5", type:"rf", position:{x:145,y:380}, data:{label:"Safety Mode", sub:"strict · normal · relaxed",active:true}},
    {id:"a6", type:"rf", position:{x:25,y:480}, data:{label:"Blocked", sub:"unsafe command" ,color:"rgba(232,112,112,.55)"}},
    {id:"a7", type:"rf", position:{x:175,y:480}, data:{label:"Execute", sub:"approved command",active:true}},
    {id:"a8", type:"rf", position:{x:175,y:570}, data:{label:"Command History", sub:"audit · session stats"}},
    {id:"a9", type:"rf", position:{x:365,y:480}, data:{label:"GPT-2", sub:"next-command prediction",active:true}},
    {id:"a10", type:"rf", position:{x:365,y:570}, data:{label:"Next Command Hint", sub:"based on recent history"}},
  ];
  const edges = [
    mkE("ea1","a1","a2",{animated:true}),
    mkE("ea2","a2","a3",{animated:true,label:"unmatched command"}),
    mkE("ea3","a3","a4",{animated:true}),
    mkE("ea4","a4","a5",{animated:true}),
    mkE("ea5","a5","a6",{label:"reject / strict mode"}),
    mkE("ea6","a5","a7",{animated:true,label:"safe / approved"}),
    mkE("ea7","a7","a8",{animated:true}),
    mkE("ea8","a8","a9",{animated:true}),
    mkE("ea9","a9","a10",{animated:true}),
  ];

  return <RFWrap nodes={nodes} edges={edges} />;
}