export function HoloSphere() {
  return (
    <div className="relative mx-auto flex h-[420px] w-[420px] max-w-full items-center justify-center sm:h-[480px] sm:w-[480px]">
      {/* orbit rings */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-8 rounded-full border border-[#00D9FF]/30" />
      </div>
      <div className="absolute inset-0" style={{ animation: "spin-slow 30s linear infinite reverse" }}>
        <div className="absolute inset-16 rounded-full border border-[#00D9FF]/20" />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: "45s" }}>
        <div className="absolute inset-24 rounded-full border border-[#00D9FF]/40" />
      </div>

      {/* SVG neural sphere */}
      <svg viewBox="0 0 400 400" className="relative h-[300px] w-[300px]">
        <circle cx="200" cy="200" r="90" fill="none" stroke="#00D9FF" strokeOpacity="0.35" />

        {/* nodes */}
        {Array.from({ length: 14 }).map((_, idx) => {
          const angle = (idx / 14) * Math.PI * 2;
          const r = 130;
          const x = 200 + Math.cos(angle) * r;
          const y = 200 + Math.sin(angle) * r;
          return (
            <g key={idx}>
              <line x1="200" y1="200" x2={x} y2={y} stroke="url(#line)" strokeWidth="0.6" opacity="0.5" />
              <circle cx={x} cy={y} r="3" fill="#22D3EE">
                <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + idx * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
        {/* connecting arcs */}
        {Array.from({ length: 8 }).map((_, idx) => {
          const a1 = (idx / 8) * Math.PI * 2;
          const a2 = ((idx + 3) / 8) * Math.PI * 2;
          const r = 130;
          const x1 = 200 + Math.cos(a1) * r;
          const y1 = 200 + Math.sin(a1) * r;
          const x2 = 200 + Math.cos(a2) * r;
          const y2 = 200 + Math.sin(a2) * r;
          return (
            <line key={`l${idx}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00D9FF" strokeWidth="0.4" opacity="0.3" />
          );
        })}
      </svg>

      {/* floating tech badges */}
      {[
        { label: "React", top: "8%", left: "10%" },
        { label: "Python", top: "18%", right: "8%" },
        { label: "Docker", bottom: "20%", left: "6%" },
        { label: "ROS 2", bottom: "10%", right: "12%" },
        { label: "AI", top: "48%", left: "-2%" },
        { label: "Figma", top: "50%", right: "-2%" },
      ].map((b, i) => (
        <div
          key={b.label}
          className="glass absolute rounded-full px-3 py-1 font-mono text-[11px] text-[#22D3EE] animate-float"
          style={{ ...b, animationDelay: `${i * 0.6}s` } as React.CSSProperties}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}
