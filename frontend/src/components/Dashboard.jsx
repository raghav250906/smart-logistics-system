import { useState } from "react";
import RouteForm from "./RouteForm";
import ResultCard from "./ResultCard";

const Dashboard = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (data) => {
    setLoading(true);

    // smooth UX delay
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
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: "Inter", sans-serif;
        }

        .dashboard-wrapper {
          min-height: 100vh;
          padding: 40px 20px;
          color: #f8fafc;
        }

        .container {
          max-width: 1100px;
          margin: auto;
        }

        .navbar {
          background: #1e293b;
          padding: 24px 32px;
          border-radius: 14px;
          margin-bottom: 32px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          text-align: center;
        }

        .title {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
          color: #ffffff;
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
          background: #1e293b;
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.6),
                      0 0 20px rgba(59, 130, 246, 0.2);
        }

        .loading {
          text-align: center;
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        
        {/* NAVBAR */}
        <div className="navbar">
          <h1 className="title">Smart Logistics</h1>
          <p className="subtitle">
            AI-powered disruption prediction & route optimization
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid">
          
          {/* FORM */}
          <div className="card">
            <RouteForm onSubmit={handleSubmit} />
          </div>

          {/* RESULT */}
          <div className="card">
            {loading ? (
              <p className="loading">Analyzing...</p>
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