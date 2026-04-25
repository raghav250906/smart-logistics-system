import { useState } from "react";
import { predictRoute } from "../services/api";

const RouteForm = ({ onSubmit }) => {

  const [form, setForm] = useState({
    source: "",
    destination: "",
    weather: "clear",
    traffic: "low",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await predictRoute(form);

      // ✅ Send data to Dashboard
      onSubmit(data);

    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#cbd5f5",
  };

  const groupStyle = {
    marginBottom: "20px",
  };

  return (
    <div>
      <h2
        style={{
          margin: "0 0 24px 0",
          fontSize: "20px",
          color: "#ffffff",
        }}
      >
        Route Analysis
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={groupStyle}>
          <label style={labelStyle}>Source</label>
          <input
            name="source"
            placeholder="Enter starting point"
            className="saas-input"
            onChange={handleChange}
            required
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Destination</label>
          <input
            name="destination"
            placeholder="Enter destination"
            className="saas-input"
            onChange={handleChange}
            required
          />
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Weather Conditions</label>
          <select
            name="weather"
            className="saas-input"
            onChange={handleChange}
          >
            <option value="clear">Clear</option>
            <option value="rain">Rain</option>
          </select>
        </div>

        <div style={groupStyle}>
          <label style={labelStyle}>Traffic Conditions</label>
          <select
            name="traffic"
            className="saas-input"
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <button
          type="submit"
          className="saas-button"
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Analyzing..." : "Predict Route Risk"}
        </button>
      </form>
    </div>
  );
};

export default RouteForm;