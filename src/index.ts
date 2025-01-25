import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import TaskController from "./controller/TaskController";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const routerv1 = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routerv1);

routerv1.post("/tasks", TaskController.CreateTask);
routerv1.get("/tasks", TaskController.GetAllTasks);
routerv1.get("/tasks/:id", TaskController.GetOneTask);
routerv1.put("/tasks/:id", TaskController.UpdateTask);
routerv1.delete("/tasks/:id", TaskController.RemoveTask);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
