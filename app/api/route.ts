import { promises as fs } from "fs";
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  let tasks: any[] = [];
  await fs
    .readFile(path.join(process.cwd(), "utils/tasks.json"))
    .then((data) => {
      tasks = JSON.parse(data.toString());
    });
  return NextResponse.json(tasks);
}

export async function POST(req: Request) {
  const task = await req.json();
  let tasks: any[] = [];
  await fs
    .readFile(path.join(process.cwd(), "utils/tasks.json"))
    .then((data) => {
      tasks = JSON.parse(data.toString());
    });
  tasks.push(task);
  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(tasks, null, 2)
  );
  revalidateTag("tasks");
  return NextResponse.json(task);
}

export async function PUT(req: Request) {
  const task = await req.json();
  let tasks: any[] = [];
  await fs
    .readFile(path.join(process.cwd(), "utils/tasks.json"))
    .then((data) => {
      tasks = JSON.parse(data.toString());
    });
  const index = tasks.findIndex((t) => t.id == task.id);
  tasks[index] = task;
  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(tasks, null, 2)
  );
  revalidateTag("tasks");
  return NextResponse.json(task);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  let tasks: any[] = [];
  await fs
    .readFile(path.join(process.cwd(), "utils/tasks.json"))
    .then((data) => {
      tasks = JSON.parse(data.toString());
    });
  const index = tasks.findIndex((task) => task.id == id);
  tasks.splice(index, 1);
  await fs.writeFile(
    path.join(process.cwd(), "utils/tasks.json"),
    JSON.stringify(tasks, null, 2)
  );
  revalidateTag("tasks");
  return NextResponse.json({ id });
}
