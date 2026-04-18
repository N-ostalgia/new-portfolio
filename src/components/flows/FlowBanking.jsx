import RFWrap from "./RFWrap";
import { mkE } from "./utils";

export default function FlowBanking() {
  const nodes = [
    {id:"b1", type:"rf", position:{x:60,y:10},   data:{label:"SAR Bank CLI",   sub:"main menu",active:true,size:"lg"}},
    {id:"b2", type:"rf", position:{x:0,y:110},   data:{label:"Admin Login",    sub:"username + password"}},
    {id:"b3", type:"rf", position:{x:200,y:110},  data:{label:"Client Login",   sub:"RIB + password (3 tries)"}},
    {id:"b4", type:"rf", position:{x:0,y:210},   data:{label:"db_verify_admin",sub:"SQLite check",active:true}},
    {id:"b5", type:"rf", position:{x:200,y:210},  data:{label:"db_verify_client",sub:"SQLite check",active:true}},
    {id:"b6", type:"rf", position:{x:200,y:310},  data:{label:"Client Menu",    sub:"14 options",active:true,size:"lg"}},
    {id:"b7", type:"rf", position:{x:60,y:410},   data:{label:"Deposit",        sub:"→ SQLite + log"}},
    {id:"b8", type:"rf", position:{x:160,y:410},  data:{label:"Withdraw",       sub:"balance check"}},
    {id:"b9", type:"rf", position:{x:260,y:410},  data:{label:"Transfer",       sub:"dual RIB update"}},
    {id:"b10",type:"rf", position:{x:360,y:410},  data:{label:"Pay Bill",       sub:"telecom/water/tax"}},
    {id:"b11",type:"rf", position:{x:460,y:410},  data:{label:"Recharge",       sub:"3 operators"}},
    {id:"b12",type:"rf", position:{x:260,y:510},  data:{label:"Demand System",  sub:"txt files queue",active:true}},
    {id:"b13",type:"rf", position:{x:100,y:610},  data:{label:"Create Acct",    sub:"→ admin approves"}},
    {id:"b14",type:"rf", position:{x:260,y:610},  data:{label:"Modify/Delete",  sub:"→ admin approves"}},
    {id:"b15",type:"rf", position:{x:420,y:610},  data:{label:"Cheque Book",    sub:"→ admin approves"}},
    {id:"b16",type:"rf", position:{x:0,y:310},   data:{label:"Admin Menu",     sub:"11 options",active:true}},
    {id:"b17",type:"rf", position:{x:-60,y:480},  data:{label:"Manage Demands", sub:"approve/reject"}},
    {id:"b18",type:"rf", position:{x:60,y:480},   data:{label:"All Accounts",   sub:"view/edit/delete"}},
    {id:"b19",type:"rf", position:{x:260,y:720},  data:{label:"SQLite3 DB",     sub:"banking.db",active:true,size:"lg"}},
    {id:"b20",type:"rf", position:{x:100,y:820},  data:{label:"Gnuplot",        sub:"monthly transactions"}},
    {id:"b21",type:"rf", position:{x:280,y:820},  data:{label:"Account Charts", sub:"type distribution"}},
    {id:"b22",type:"rf", position:{x:460,y:820},  data:{label:"Message Box",    sub:"in-app notifications"}},
  ];
  const edges = [
    mkE("be1","b1","b2"), mkE("be2","b1","b3"),
    mkE("be3","b2","b4",{animated:true}), mkE("be4","b3","b5",{animated:true}),
    mkE("be5","b4","b16",{animated:true}), mkE("be6","b5","b6",{animated:true}),
    mkE("be7","b6","b7"), mkE("be8","b6","b8"), mkE("be9","b6","b9"), mkE("be10","b6","b10"), mkE("be11","b6","b11"),
    mkE("be12","b6","b12",{animated:true}),
    mkE("be13","b12","b13"), mkE("be14","b12","b14"), mkE("be15","b12","b15"),
    mkE("be16","b16","b17"), mkE("be17","b16","b18"),
    mkE("be18","b7","b19",{animated:true}), mkE("be19","b8","b19",{animated:true}),
    mkE("be20","b9","b19",{animated:true}), mkE("be21","b10","b19",{animated:true}),
    mkE("be22","b19","b20"), mkE("be23","b19","b21"), mkE("be24","b19","b22",{animated:true}),
  ];
  return <RFWrap nodes={nodes} edges={edges} />;
}