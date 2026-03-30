// TheatreBackground.jsx
const TheatreBackground = () => (
  <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
    <svg
      viewBox="0 0 680 420"
      preserveAspectRatio="xMidYMid slice"
      style={{ width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="floorGlow" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#8b3a1a" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#0d0503" stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes drift {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          15%  { opacity: 0.6; }
          85%  { opacity: 0.3; }
          100% { transform: translateY(-80px) translateX(12px); opacity: 0; }
        }
        .particle { animation: drift linear infinite; }
      `}</style>

      <rect width="680" height="420" fill="#0d0503" />
      <rect width="680" height="420" fill="url(#floorGlow)" />

      <circle className="particle" cx="280" cy="320" r="1.5" fill="#8b3a1a" style={{ animationDuration: "5s", animationDelay: "0s" }} />
      <circle className="particle" cx="320" cy="300" r="1"   fill="#a04520" style={{ animationDuration: "7s", animationDelay: "1.2s" }} />
      <circle className="particle" cx="360" cy="340" r="1.5" fill="#8b3a1a" style={{ animationDuration: "6s", animationDelay: "0.5s" }} />
      <circle className="particle" cx="400" cy="310" r="1"   fill="#a04520" style={{ animationDuration: "8s", animationDelay: "2s" }} />
      <circle className="particle" cx="250" cy="350" r="1"   fill="#8b3a1a" style={{ animationDuration: "5.5s", animationDelay: "3s" }} />
      <circle className="particle" cx="430" cy="330" r="1.5" fill="#a04520" style={{ animationDuration: "6.5s", animationDelay: "1.8s" }} />
      <circle className="particle" cx="310" cy="280" r="1"   fill="#8b3a1a" style={{ animationDuration: "9s", animationDelay: "0.8s" }} />
      <circle className="particle" cx="370" cy="260" r="1.2" fill="#a04520" style={{ animationDuration: "7.5s", animationDelay: "4s" }} />
    </svg>
  </div>
);

export default TheatreBackground;