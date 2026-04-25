export const predictRoute = (req, res) => {
  const { source, destination, weather, traffic } = req.body;

  let score = 20;
  let reasons = [];

  // 🌧 Weather impact
  if (weather === "rain") {
    score += 30;
    reasons.push("Rain may slow down delivery due to slippery roads");
  }

  // 🚦 Traffic impact
  if (traffic === "medium") {
    score += 20;
    reasons.push("Moderate traffic could cause slight delays");
  }

  if (traffic === "high") {
    score += 40;
    reasons.push("Heavy congestion detected, high delay probability");
  }

  // 🧠 Default condition
  if (reasons.length === 0) {
    reasons.push("Route conditions are optimal for delivery");
  }

  // 🎯 Risk level
  let risk = "Low";
  if (score >= 70) risk = "High";
  else if (score >= 40) risk = "Medium";

  // 🔥 Cap score at 100
  if (score > 100) score = 100;

  res.json({
    risk,
    score,
    route: `${source} → ${destination}`,
    reason: reasons.join(". ") + " 🚚",
    source,
    destination
  });
};