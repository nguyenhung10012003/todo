import { promises as fs } from "fs";
import path from "path";

export const getTasks = async () => {
  const data = await fs.readFile(path.join(process.cwd(), "utils/tasks.json"));

  return JSON.parse(data.toString()).map((task: any) => {
    return {
      id: task.id,
      title: task.title,
      status: task.status,
      priority: task.priority,
    };
  });
};

export const saveTask = async (task: {
  id: string;
  title: string;
  status: string;
  priority: string;
}) => {
  const data = await getTasks();

  data.push(task);

  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(data, null, 2)
  );
};

export const updateTask = async (task: {
  id: string;
  title: string;
  status: string;
  priority: string;
}) => {
  const data = await getTasks();

  const index = data.findIndex((t: any) => t.id === task.id);

  data[index] = task;

  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(data, null, 2)
  );
};

export const deleteTask = async (id: string) => {
  const data = await getTasks();

  const index = data.findIndex((task: any) => task.id === id);

  data.splice(index, 1);

  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(data, null, 2)
  );
};
