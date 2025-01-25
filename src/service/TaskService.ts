import { PrismaClient } from "@prisma/client";
import { TaskDTO } from "../dto/TaskDTO";
import { TaskSchema } from "../validator/TaskValidator";

const prisma = new PrismaClient();

async function getAll() {
  try {
    const tasks = await prisma.task.findMany();
    return tasks;
  } catch (error) {
    throw error;
  }
}

async function getOne(id: number) {
  try {
    const tasks = await prisma.task.findFirst({
      where: {
        id: id,
      },
    });
    return tasks;
  } catch (error) {
    throw error;
  }
}

async function create(dto: TaskDTO) {
  try {
    const validation = TaskSchema.validate(dto);
    if (validation.error) throw new Error(validation.error.message);

    const task = await prisma.task.create({
      data: {
        ...dto,
      },
    });
    return task;
  } catch (error) {
    throw error;
  }
}

async function remove(id: number) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: id,
      },
    });
    return task;
  } catch (error) {
    throw error;
  }
}

async function update(id: number, dto: TaskDTO) {
  try {
    const validation = TaskSchema.validate(dto);
    if (validation.error) throw new Error(validation.error.message);

    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return task;
  } catch (error) {
    throw error;
  }
}

export default { getAll, create, update, remove, getOne };
