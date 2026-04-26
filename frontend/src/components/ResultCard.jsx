const ResultCard = ({ result }) => {

  const risk = result?.risk || "N/A";
  const score = result?.score || 0;
  const route = result?.route || "No route available";
  const reason = result?.reason || "No analysis yet";

  if (!result) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        color: '#94a3b8'
      }}>
        <div style={{ fontSize: '60px', marginBottom: '10px' }}>📊</div>
        <p>Start prediction to see insights</p>
      </div>
    );
  }

  const getColor = () => {
    if (score < 40) return "#22c55e";
    if (score < 70) return "#eab308";
    return "#ef4444";
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      animation: 'fadeIn 0.5s ease'
    }}>

      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Risk Analysis</h2>
        <span style={{
          padding: "6px 12px",
          borderRadius: "20px",
          background: getColor() + "22",
          color: getColor(),
          fontWeight: 700
        }}>
          {risk}
        </span>
      </div>

      {/* SCORE */}
      <div style={{
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px"
      }}>
        <div style={{
          fontSize: "70px",
          fontWeight: "900",
          color: getColor(),
          textShadow: `0 0 20px ${getColor()}66`
        }}>
          {score}%
        </div>

        <div style={{
          height: "8px",
          background: "#1f2937",
          borderRadius: "10px",
          marginTop: "10px",
          overflow: "hidden"
        }}>
          <div style={{
            width: `${score}%`,
            height: "100%",
            background: getColor(),
            transition: "1s ease"
          }} />
        </div>
      </div>

      {/* DETAILS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: "12px" }}>
        <div>
          <strong>🛣 Route</strong>
          <p>{route}</p>
        </div>

        <div>
          <strong>⚠ Reason</strong>
          <p>{reason}</p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
};

export default ResultCard;