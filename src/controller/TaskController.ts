import { Request, Response } from "express";
import TaskService from "../service/TaskService";

async function GetAllTasks(req: Request, res: Response) {
  try {
    const taks = await TaskService.getAll();
    res.status(201).json(taks);
  } catch (error) {
    const errorAsError = error as Error;
    res.status(500).json({ message: errorAsError.message });
  }
}

async function GetOneTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const taks = await TaskService.getOne(parseInt(id));
    res.status(201).json(taks);
  } catch (error) {
    const errorAsError = error as Error;
    res.status(500).json({ message: errorAsError.message });
  }
}

async function CreateTask(req: Request, res: Response) {
  try {
    const body = { ...req.body };
    const taks = await TaskService.create(body);
    res.status(201).json(taks);
  } catch (error) {
    const errorAsError = error as Error;
    res.status(500).json({ message: errorAsError.message });
  }
}

async function UpdateTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const body = { ...req.body };
    const taks = await TaskService.update(parseInt(id), body);
    res.status(201).json(taks);
  } catch (error) {
    const errorAsError = error as Error;
    res.status(500).json({ message: errorAsError.message });
  }
}

async function RemoveTask(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const taks = await TaskService.remove(parseInt(id));
    res.status(201).json(taks);
  } catch (error) {
    const errorAsError = error as Error;
    res.status(500).json({ message: errorAsError.message });
  }
}

export default { GetAllTasks, CreateTask, UpdateTask, RemoveTask, GetOneTask };
