import express from "express";
import cors from "cors";
import routeRoutes from "./routes/routeRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/routes", routeRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});