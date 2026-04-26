import { useState } from "react";
import RouteForm from "./RouteForm";
import ResultCard from "./ResultCard";

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);

    setTimeout(() => {
      setResult(data);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="dashboard-wrapper">
      <style>{`
        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: "Inter", sans-serif;
          background: radial-gradient(circle at top right, #1e3a8a, #020617);
        }

        .dashboard-wrapper {
          min-height: 100vh;
          padding: 40px 20px;
          color: #f8fafc;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .navbar {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          padding: 24px 32px;
          border-radius: 16px;
          margin-bottom: 32px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.6);
          text-align: center;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .title {
          margin: 0;
          font-size: 30px;
          font-weight: 800;
          background: linear-gradient(to right, #38bdf8, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          margin-top: 6px;
          font-size: 14px;
          color: #94a3b8;
        }

        .grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 50px rgba(0,0,0,0.8),
                      0 0 30px rgba(59,130,246,0.3);
        }

        .loading {
          text-align: center;
          color: #94a3b8;
          animation: pulse 1.2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">

        <div className="navbar">
          <h1 className="title">🚀 Smart Logistics</h1>
          <p className="subtitle">
            AI-powered disruption prediction & route optimization
          </p>
        </div>

        <div className="grid">

          <div className="card">
            <RouteForm onSubmit={handleSubmit} />
          </div>

          <div className="card">
            {loading ? (
              <p className="loading">⚡ Analyzing smart route...</p>
            ) : (
              <ResultCard result={result} />
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;