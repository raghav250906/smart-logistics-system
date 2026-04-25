function predictRisk(weather, traffic) {
  if (weather === "rain" && traffic === "high") {
    return {
      risk: "High",
      score: 85,
      reason: "Heavy rain and high traffic congestion",
      route: "Use alternate highway",
    };
  } else if (traffic === "medium") {
    return {
      risk: "Medium",
      score: 60,
      reason: "Moderate traffic conditions",
      route: "Consider alternate route",
    };
  } else {
    return {
      risk: "Low",
      score: 30,
      reason: "Normal conditions",
      route: "Continue on current route",
    };
  }
}

module.exports = { predictRisk };