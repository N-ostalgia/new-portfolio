import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowStudyBuddy() {
  const nodes = [
    {id:"s1", type:"rf", position:{x:0,y:20},    data:{label:"Webcam Feed",    sub:"live capture"}},
    {id:"s2", type:"rf", position:{x:160,y:20},  data:{label:"Pomodoro Timer", sub:"work/break cycles"}},
    {id:"s3", type:"rf", position:{x:320,y:20},  data:{label:"Study Goals",    sub:"SQLite storage"}},
    {id:"s4", type:"rf", position:{x:160,y:120}, data:{label:"Qt/C++ Engine",  sub:"main window logic",active:true,size:"lg"}},
    {id:"s5", type:"rf", position:{x:0,y:230},   data:{label:"OpenCV",         sub:"face detection",active:true}},
    {id:"s6", type:"rf", position:{x:0,y:320},   data:{label:"Eye Tracking",   sub:"attention monitor",active:true}},
    {id:"s7", type:"rf", position:{x:0,y:410},   data:{label:"Focus Score",    sub:"0–100% attention",active:true}},
    {id:"s8", type:"rf", position:{x:160,y:230}, data:{label:"Session Data",   sub:"duration / breaks"}},
    {id:"s9", type:"rf", position:{x:160,y:320}, data:{label:"Gemini API",     sub:"personalized tips",active:true}},
    {id:"s10",type:"rf", position:{x:160,y:410}, data:{label:"AI Study Tips",  sub:"context-aware"}},
    {id:"s11",type:"rf", position:{x:320,y:230}, data:{label:"SQLite DB",      sub:"studybuddy.db",active:true}},
    {id:"s12",type:"rf", position:{x:320,y:320}, data:{label:"Survey System",  sub:"session reflection"}},
    {id:"s13",type:"rf", position:{x:320,y:410}, data:{label:"Streaks",        sub:"daily consistency"}},
    {id:"s14",type:"rf", position:{x:60,y:520},  data:{label:"Analytics",      sub:"focus patterns/charts"}},
    {id:"s15",type:"rf", position:{x:220,y:520}, data:{label:"Achievements",   sub:"milestones/gamification"}},
    {id:"s16",type:"rf", position:{x:380,y:520}, data:{label:"Calendar Plan",  sub:"auto-scheduled sessions"}},
  ];
  const edges = [
    mkE("se1","s1","s4",{animated:true}), mkE("se2","s2","s4"), mkE("se3","s3","s4"),
    mkE("se4","s4","s5",{animated:true}), mkE("se5","s5","s6",{animated:true}), mkE("se6","s6","s7",{animated:true}),
    mkE("se7","s4","s8",{animated:true}), mkE("se8","s8","s9",{animated:true}), mkE("se9","s9","s10",{animated:true}),
    mkE("se10","s4","s11",{animated:true}), mkE("se11","s11","s12"), mkE("se12","s11","s13"),
    mkE("se13","s7","s14",{animated:true}), mkE("se14","s10","s14"),
    mkE("se15","s13","s15"), mkE("se16","s12","s15"),
    mkE("se17","s11","s16"), mkE("se18","s2","s16"),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}