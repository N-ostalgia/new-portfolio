import { ReactFlow, Background, Controls, useNodesState, useEdgesState } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { rfNodeTypes } from "./utils";

const rfCSS = `
  .rf-wrap .react-flow__background { background:#0A0907!important }
  .rf-wrap .react-flow__edge-path { stroke:rgba(201,150,58,.45)!important; stroke-width:1.5px }
  .rf-wrap .react-flow__edge-path.animated { stroke-dasharray:5; animation:rfdash 1.4s linear infinite }
  .rf-wrap .react-flow__controls { background:#141210!important; border:1px solid rgba(201,150,58,.2)!important; bottom:8px!important; left:8px!important }
  .rf-wrap .react-flow__controls button { background:#141210!important; border-bottom:1px solid rgba(201,150,58,.12)!important; color:rgba(201,150,58,.6)!important; fill:rgba(201,150,58,.6)!important }
  .rf-wrap .react-flow__controls button:hover { background:rgba(201,150,58,.08)!important }
  .rf-wrap .react-flow__attribution { display:none }
  .rf-wrap .react-flow__handle { width:5px!important; height:5px!important; background:rgba(201,150,58,.45)!important; border:none!important }
  @keyframes rfdash { to { stroke-dashoffset:-10 } }
`;

export default function RFWrap({ nodes: initialNodes, edges: initialEdges }) {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);

  return (
    <div className="rf-wrap" style={{ position: "absolute", inset: 0 }}>
      <style>{rfCSS}</style>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        nodeTypes={rfNodeTypes}
        fitView
        fitViewOptions={{ padding: 0.18 }}
        minZoom={0.3}
        maxZoom={2.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="rgba(201,150,58,.05)" gap={22} size={1} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
}