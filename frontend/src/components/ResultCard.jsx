const ResultCard = ({ result }) => {

  // 🔥 SAFE DEFAULTS (no crash)
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
        color: '#94a3b8',
        textAlign: 'center',
        height: '100%'
      }}>
        <div style={{
          fontSize: '50px',
          marginBottom: '16px',
          opacity: 0.6
        }}>📊</div>

        <p style={{
          margin: 0,
          fontSize: '16px',
          fontWeight: 500,
          color: '#cbd5f5',
          lineHeight: 1.6
        }}>
          Enter route details and predict risk<br />
          to see smart analysis here.
        </p>
      </div>
    );
  }

  const getBadgeStyle = (level) => {
    switch (level?.toLowerCase()) {
      case "low":
        return { backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' };
      case "medium":
        return { backgroundColor: 'rgba(234, 179, 8, 0.2)', color: '#eab308' };
      case "high":
        return { backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' };
      default:
        return { backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff' };
    }
  };

  const getProgressColor = (val) => {
    if (val < 40) return "#22c55e";
    if (val < 70) return "#eab308";
    return "#ef4444";
  };

  const getIcon = (level) => {
    switch (level?.toLowerCase()) {
      case "low": return "✅";
      case "medium": return "⚠️";
      case "high": return "🚨";
      default: return "ℹ️";
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      animation: 'fadeIn 0.4s ease'
    }}>

      {/* HEADER */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }}>
        <h2 style={{ margin: 0, fontSize: '20px', color: '#ffffff' }}>
          Risk Assessment
        </h2>

        <span style={{
          ...getBadgeStyle(risk),
          padding: '6px 14px',
          borderRadius: '20px',
          fontWeight: 700
        }}>
          {getIcon(risk)} {risk}
        </span>
      </div>

      {/* SCORE CARD */}
      <div style={{
        textAlign: 'center',
        padding: '26px 0',
        backgroundColor: '#1f2937',
        borderRadius: '12px',
        border: '1px solid #374151',
        marginBottom: '20px'
      }}>
        <div style={{
          fontSize: '72px',
          fontWeight: 900,
          color: '#ffffff',
          transition: 'all 0.4s ease'
        }}>
          {score}%
        </div>

        <div style={{
          color: '#94a3b8',
          fontSize: '13px',
          letterSpacing: '1px'
        }}>
          RISK SCORE
        </div>

        {/* PROGRESS BAR */}
        <div style={{
          marginTop: '14px',
          height: '8px',
          background: '#374151',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${score}%`,
            height: '100%',
            background: getProgressColor(score),
            transition: '0.6s ease'
          }} />
        </div>
      </div>

      {/* DETAILS */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>

        <div style={{
          padding: '14px',
          backgroundColor: '#1f2937',
          borderRadius: '10px',
          border: '1px solid #374151'
        }}>
          <strong style={{ color: '#ffffff' }}>🛣 Route</strong>
          <p style={{ margin: '6px 0 0', color: '#cbd5f5' }}>
            {route}
          </p>
        </div>

        <div style={{
          padding: '14px',
          backgroundColor: '#1f2937',
          borderRadius: '10px',
          border: '1px solid #374151'
        }}>
          <strong style={{ color: '#ffffff' }}>⚠ Reason</strong>
          <p style={{ margin: '6px 0 0', color: '#cbd5f5' }}>
            {reason}
          </p>
        </div>

      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ResultCard;