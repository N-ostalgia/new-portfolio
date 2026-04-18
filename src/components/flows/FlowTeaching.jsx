import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowTeaching() {
  const nodes = [
    {id:"t1",  type:"rf", position:{x:0,   y:0},   data:{label:"Admin",        sub:"create accounts / assign roles"}},
    {id:"t2",  type:"rf", position:{x:130, y:0},   data:{label:"Dept. Head",   sub:"validate / report / history"}},
    {id:"t3",  type:"rf", position:{x:260, y:0},   data:{label:"Coordinator",  sub:"UE list / vacataires / timetable"}},
    {id:"t4",  type:"rf", position:{x:390, y:0},   data:{label:"Teacher",      sub:"wish UEs / check load / grades"}},
    {id:"t5",  type:"rf", position:{x:520, y:0},   data:{label:"Adjunct",      sub:"view assigned UEs / upload grades"}},
    {id:"t6",  type:"rf", position:{x:260, y:100}, data:{label:"Secure Auth",  sub:"role-based session",active:true,size:"lg"}},
    {id:"t7",  type:"rf", position:{x:260, y:200}, data:{label:"PHP Backend",  sub:"Apache · Bootstrap · Composer",active:true}},
    {id:"t8",  type:"rf", position:{x:260, y:295}, data:{label:"MySQL DB",     sub:"UE · teachers · depts · history",active:true}},
    {id:"t9",  type:"rf", position:{x:60,  y:400}, data:{label:"UE Catalogue", sub:"available units by specialty"}},
    {id:"t10", type:"rf", position:{x:60,  y:490}, data:{label:"Wish Submit",  sub:"teacher selects UEs"}},
    {id:"t11", type:"rf", position:{x:60,  y:580}, data:{label:"Load Check",   sub:"auto calc · min load alert",active:true}},
    {id:"t12", type:"rf", position:{x:260, y:400}, data:{label:"Load Overview",sub:"color-coded: below minimum first",active:true}},
    {id:"t13", type:"rf", position:{x:260, y:490}, data:{label:"Validate/Decline",sub:"dept head approves wishes"}},
    {id:"t14", type:"rf", position:{x:260, y:580}, data:{label:"Vacant UEs",   sub:"unassigned units → adjunct pool"}},
    {id:"t15", type:"rf", position:{x:460, y:400}, data:{label:"UE Descriptor",sub:"CM/TD/TP · credits · volume horaire"}},
    {id:"t16", type:"rf", position:{x:460, y:490}, data:{label:"TD/TP Groups", sub:"define groups per semester"}},
    {id:"t17", type:"rf", position:{x:460, y:580}, data:{label:"Assign Adjunct",sub:"coordinator → vacataire UEs"}},
    {id:"t18", type:"rf", position:{x:60,  y:690}, data:{label:"PHPMailer",    sub:"email notifications"}},
    {id:"t19", type:"rf", position:{x:200, y:690}, data:{label:"Excel Import/Export",sub:"data exchange",active:true}},
    {id:"t20", type:"rf", position:{x:360, y:690}, data:{label:"Timetable",    sub:"emploi du temps / semester"}},
    {id:"t21", type:"rf", position:{x:500, y:690}, data:{label:"Grade Upload", sub:"normal + rattrapage sessions"}},
    {id:"t22", type:"rf", position:{x:280, y:790}, data:{label:"History / Reporting",sub:"all past years · analytics",active:true}},
  ];
  const edges = [
    mkE("te1","t1","t6"), mkE("te2","t2","t6"), mkE("te3","t3","t6"),
    mkE("te4","t4","t6"), mkE("te5","t5","t6"),
    mkE("te6","t6","t7",{animated:true}),
    mkE("te7","t7","t8",{animated:true}),
    mkE("te8","t8","t9",{animated:true}),
    mkE("te9","t8","t12",{animated:true}),
    mkE("te10","t8","t15",{animated:true}),
    mkE("te11","t9","t10",{animated:true}),
    mkE("te12","t10","t11",{animated:true}),
    mkE("te13","t12","t13"),
    mkE("te14","t13","t14"),
    mkE("te15","t15","t16"),
    mkE("te16","t16","t17",{animated:true}),
    mkE("te17","t11","t13",{animated:true,label:"submit"}),
    mkE("te18","t14","t17",{label:"vacant → adjunct"}),
    mkE("te19","t8","t18"),
    mkE("te20","t8","t19"),
    mkE("te21","t8","t20"),
    mkE("te22","t8","t21"),
    mkE("te23","t8","t22",{animated:true}),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}