import { Handle, Position, MarkerType } from "@xyflow/react";

export function RFNode({ data }) {
  const base = {
    padding: data.size === "lg" ? "8px 14px" : "5px 10px",
    border: `1px solid ${data.color || (data.active ? "rgba(201,150,58,.85)" : "rgba(201,150,58,.22)")}`,
    background: data.active ? "rgba(201,150,58,.13)" : "rgba(20,18,16,.9)",
    color: data.active ? "#F0EDE6" : "#B8B3A8",
    fontFamily: "'DM Mono',monospace",
    fontSize: data.size === "lg" ? "9px" : "7.5px",
    letterSpacing: ".05em",
    textTransform: "uppercase",
    borderRadius: "2px",
    textAlign: "center",
    minWidth: "70px",
    boxShadow: data.active ? "0 0 12px rgba(201,150,58,.2)" : "none",
  };
  return (
    <div style={base}>
      {data.icon && <div style={{ fontSize: "11px", marginBottom: "2px" }}>{data.icon}</div>}
      {data.label}
      {data.sub && <div style={{ fontSize: "6.5px", color: "rgba(201,150,58,.4)", marginTop: "2px", letterSpacing: ".06em" }}>{data.sub}</div>}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Left} id="l" />
      <Handle type="source" position={Position.Right} id="r" />
    </div>
  );
}

export function RFGroup({ data }) {
  return (
    <div
      style={{
        padding: "6px 10px",
        border: "1px dashed rgba(201,150,58,.18)",
        background: "rgba(201,150,58,.025)",
        borderRadius: "3px",
        fontFamily: "'DM Mono',monospace",
        fontSize: "6.5px",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "rgba(201,150,58,.3)",
      }}
    >
      {data.label}
    </div>
  );
}

export const rfNodeTypes = { rf: RFNode, grp: RFGroup };

export const mkE = (id, s, t, opts = {}) => ({
  id,
  source: s,
  target: t,
  animated: opts.animated || false,
  sourceHandle: opts.sh || undefined,
  targetHandle: opts.th || undefined,
  style: { stroke: opts.animated ? "rgba(201,150,58,.6)" : "rgba(201,150,58,.35)", strokeWidth: 1.5 },
  markerEnd: { type: MarkerType.ArrowClosed, color: "rgba(201,150,58,.45)", width: 10, height: 10 },
  label: opts.label || undefined,
  labelStyle: { fontSize: "6.5px", fontFamily: "'DM Mono',monospace", fill: "rgba(201,150,58,.5)", letterSpacing: ".04em" },
  labelBgStyle: { fill: "#0A0907", fillOpacity: 0.8 },
});