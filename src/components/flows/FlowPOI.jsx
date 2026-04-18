import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowPOI() {
  const nodes = [
    {id:"p1", type:"rf", position:{x:40,y:10},  data:{label:"City Input",     sub:"user query"}},
    {id:"p2", type:"rf", position:{x:170,y:10},  data:{label:"Category",       sub:"restaurant/hotel/..."}},
    {id:"p3", type:"rf", position:{x:300,y:10},  data:{label:"Radius (km)",    sub:"search area"}},
    {id:"p4", type:"rf", position:{x:170,y:100}, data:{label:"Overpass API",   sub:"OSM data query",active:true,size:"lg"}},
    {id:"p5", type:"rf", position:{x:170,y:195}, data:{label:"POI Collection", sub:"filtered results"}},
    {id:"p6", type:"rf", position:{x:10,y:295},  data:{label:"Greedy",         sub:"nearest neighbor",active:true}},
    {id:"p7", type:"rf", position:{x:150,y:295}, data:{label:"A* Search",      sub:"heuristic optimal",active:true}},
    {id:"p8", type:"rf", position:{x:290,y:295}, data:{label:"Genetic Algo",   sub:"evolutionary opt",active:true}},
    {id:"p9", type:"rf", position:{x:150,y:390}, data:{label:"Optimized Route",sub:"ordered POI list",active:true,size:"lg"}},
    {id:"p10",type:"rf", position:{x:150,y:480}, data:{label:"Step Navigator", sub:"current → next POI"}},
    {id:"p11",type:"rf", position:{x:30,y:575},  data:{label:"2D Map",         sub:"JavaFX interactive"}},
    {id:"p12",type:"rf", position:{x:170,y:575}, data:{label:"Robot 3D Anim",  sub:"path visualization"}},
    {id:"p13",type:"rf", position:{x:310,y:575}, data:{label:"Tour Stats",     sub:"dist/duration/algo"}},
  ];
  const edges = [
    mkE("ep1","p1","p4"), mkE("ep2","p2","p4"), mkE("ep3","p3","p4"),
    mkE("ep4","p4","p5",{animated:true,label:"JSON POIs"}),
    mkE("ep5","p5","p6"), mkE("ep6","p5","p7"), mkE("ep7","p5","p8"),
    mkE("ep8","p6","p9",{animated:true}), mkE("ep9","p7","p9",{animated:true}), mkE("ep10","p8","p9",{animated:true}),
    mkE("ep11","p9","p10",{animated:true}),
    mkE("ep12","p10","p11",{animated:true}), mkE("ep13","p10","p12",{animated:true}), mkE("ep14","p10","p13"),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}