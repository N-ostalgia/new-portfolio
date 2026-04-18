import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowNIDS() {
  const nodes = [
    {id:"n1", type:"rf", position:{x:20,y:20},   data:{label:"Live Traffic", sub:"network interface",active:true}},
    {id:"n2", type:"rf", position:{x:160,y:20},  data:{label:"PCAP File",    sub:"offline capture"}},
    {id:"n3", type:"rf", position:{x:300,y:20},  data:{label:"CSV Data",     sub:"pre-extracted"}},
    {id:"n4", type:"rf", position:{x:160,y:110}, data:{label:"tshark",       sub:"packet capture",active:true}},
    {id:"n5", type:"rf", position:{x:160,y:200}, data:{label:"CICFlowMeter", sub:"116 flow features",active:true}},
    {id:"n6", type:"rf", position:{x:160,y:290}, data:{label:"XGBoost Model",sub:"scikit-learn / joblib",active:true,size:"lg"}},
    {id:"n7", type:"rf", position:{x:0,y:390},   data:{label:"DDoS",         sub:"attack",color:"rgba(232,112,112,.5)"}},
    {id:"n8", type:"rf", position:{x:90,y:390},  data:{label:"DoS",          sub:"hulk/golden",color:"rgba(232,112,112,.5)"}},
    {id:"n9", type:"rf", position:{x:180,y:390}, data:{label:"BruteForce",   sub:"ftp/ssh/web",color:"rgba(232,112,112,.5)"}},
    {id:"n10",type:"rf", position:{x:270,y:390}, data:{label:"Port Scan",    sub:"nmap style",color:"rgba(232,112,112,.5)"}},
    {id:"n11",type:"rf", position:{x:360,y:390}, data:{label:"Benign",       sub:"safe traffic",color:"rgba(74,222,128,.45)"}},
    {id:"n12",type:"rf", position:{x:160,y:480}, data:{label:"FastAPI",      sub:"/predict /alerts /ws",active:true}},
    {id:"n13",type:"rf", position:{x:20,y:570},  data:{label:"Alert Engine", sub:"generate/notify/archive"}},
    {id:"n14",type:"rf", position:{x:160,y:570}, data:{label:"WebSocket",    sub:"real-time stream",active:true}},
    {id:"n15",type:"rf", position:{x:300,y:570}, data:{label:"Reports API",  sub:"stats/export"}},
    {id:"n16",type:"rf", position:{x:160,y:660}, data:{label:"React Dashboard",sub:"monitoring UI",active:true,size:"lg"}},
  ];
  const edges = [
    mkE("e1","n1","n4",{animated:true}), mkE("e2","n2","n4",{animated:true}), mkE("e3","n3","n4",{animated:true}),
    mkE("e4","n4","n5",{animated:true}),
    mkE("e5","n5","n6",{animated:true,label:"116 features"}),
    mkE("e6","n6","n7"), mkE("e7","n6","n8"), mkE("e8","n6","n9"), mkE("e9","n6","n10"), mkE("e10","n6","n11"),
    mkE("e11","n7","n12",{animated:true}), mkE("e12","n8","n12",{animated:true}), mkE("e13","n9","n12",{animated:true}),
    mkE("e14","n10","n12",{animated:true}), mkE("e15","n11","n12",{animated:true}),
    mkE("e16","n12","n13"), mkE("e17","n12","n14",{animated:true}), mkE("e18","n12","n15"),
    mkE("e19","n13","n16"), mkE("e20","n14","n16",{animated:true}), mkE("e21","n15","n16"),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}