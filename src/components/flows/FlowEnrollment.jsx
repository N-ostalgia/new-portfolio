import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowEnrollment() {
  const nodes = [
    {id:"e1", type:"rf", position:{x:145,y:0}, data:{label:"React Dashboard", sub:"student · course · enrollment",active:true,size:"lg"}},
    {id:"e2", type:"rf", position:{x:0,y:100}, data:{label:"Student Management", sub:"create · view · update"}},
    {id:"e3", type:"rf", position:{x:145,y:100}, data:{label:"Course Management", sub:"catalog · course details"}},
    {id:"e4", type:"rf", position:{x:290,y:100}, data:{label:"Enrollment Workflow", sub:"register students"}},
    {id:"e5", type:"rf", position:{x:145,y:205}, data:{label:"API Gateway", sub:"route requests",active:true,size:"lg"}},
    {id:"e6", type:"rf", position:{x:0,y:310}, data:{label:"Student Service", sub:"Spring Boot",active:true}},
    {id:"e7", type:"rf", position:{x:145,y:310}, data:{label:"Course Service", sub:"Spring Boot",active:true}},
    {id:"e8", type:"rf", position:{x:290,y:310}, data:{label:"Enrollment Service", sub:"Spring Boot",active:true}},
    {id:"e9", type:"rf", position:{x:420,y:205}, data:{label:"Eureka", sub:"service discovery"}},
    {id:"e10", type:"rf", position:{x:145,y:420}, data:{label:"MySQL", sub:"persistent records",active:true,size:"lg"}},
  ];
  const edges = [
    mkE("ee1","e1","e2"), mkE("ee2","e1","e3"), mkE("ee3","e1","e4"),
    mkE("ee4","e2","e5",{animated:true}), mkE("ee5","e3","e5",{animated:true}), mkE("ee6","e4","e5",{animated:true}),
    mkE("ee7","e5","e6",{animated:true}), mkE("ee8","e5","e7",{animated:true}), mkE("ee9","e5","e8",{animated:true}),
    mkE("ee10","e5","e9",{label:"discover services"}),
    mkE("ee11","e6","e10"), mkE("ee12","e7","e10"), mkE("ee13","e8","e10"),
  ];

  return <RFWrap nodes={nodes} edges={edges} />;
}