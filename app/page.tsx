import {promises as fs} from "fs"
import path from "path"
import {Metadata} from "next"

import {columns} from "@/components/Columns"
import {DataTable} from "@/components/DataTable"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "utils/tasks.json")
  )

  return JSON.parse(data.toString()).map((task: any) => {
    return {
      id: task.id,
      title: task.title,
      status: task.status,
      priority: task.priority,
    }
  });

}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (

    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks
          </p>
        </div>
      </div>
      <DataTable data={tasks} columns={columns}/>
    </div>
  )
}