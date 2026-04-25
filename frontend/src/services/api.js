export const predictRoute = async (formData) => {
  const response = await fetch("http://localhost:5000/api/routes/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  return response.json();
};