import { Metadata } from "next";

import { columns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";

export const metadata: Metadata = {
  title: "Tasks",
  description: "A todo app built with Next.js, Tailwind Css, Shadcn-ui",
};

export default async function TaskPage() {
  const tasks = await fetch("http:localhost:3000/api", {
    next: { tags: ["tasks"] },
  }).then((res) => res.json());

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks
          </p>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </div>
  );
}
