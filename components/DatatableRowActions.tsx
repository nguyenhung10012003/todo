"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";
import TaskModal from "./TaskModal";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <>
      <TaskModal
        openBtn={
          <Button variant="outline" className="border-gray-400">
            <PencilIcon className="h-4 w-4 mr-2" />
            Edit
          </Button>
        }
        saveMethod={"update"}
        title={"Edit task"}
        description={"Edit your task"}
        task={row.original}
      />
    </>
  );
}
