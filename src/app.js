import express from "express";
import TasksRoutes from "./routes/tasks.routes";
import morgan from "morgan";
import cors from "cors";
// settings
const app = express();
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // para entender los datos que vienen de un formulario HTML
app.use(cors());
// routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/api", TasksRoutes);

export default app;
