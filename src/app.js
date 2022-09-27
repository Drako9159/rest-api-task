import express from "express";
import TasksRoutes from "./routes/tasks.routes";

const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api", TasksRoutes);

export default app;
