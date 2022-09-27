import express from "express";
import TasksRoutes from "./routes/tasks.routes";

// settings
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api", TasksRoutes);

export default app;
