"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface TaskModalProps {
  openBtn: React.ReactNode;
  handleSave: () => void;
  title: string;
  description: string;
  task?: {
    id: string;
    title: string;
    status: string;
    priority: string;
  };
}

export default function TaskModal({
  openBtn,
  handleSave,
  title,
  description,
  task,
}: TaskModalProps) {
  return (
    <Dialog.Root modal={true}>
      <Dialog.Trigger asChild>{openBtn}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          onInteractOutside={(e: any) => {
            e.preventDefault();
          }}
          className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] 
        w-[90vw] max-w-[550px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] 
        shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
        focus:outline-none"
        >
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            {description}
          </Dialog.Description>
          <div className="flex flex-col gap-2">
            <Label htmlFor="id">Task Id</Label>
            <Input
              type="text"
              id="id"
              placeholder="Your task Id"
              className="border-gray-500"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Label htmlFor="title">Task Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Your task title here"
              className="border-gray-500"
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-2 mt-4">
            <div className="flex flex-col gap-2 w-full">
              <Label>Priority</Label>
              <Select>
                <SelectTrigger className="w-full border-gray-500">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priorites</SelectLabel>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <Label>Status</Label>
              <Select>
                <SelectTrigger className="w-full border-gray-500">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Statuses</SelectLabel>
                    <SelectItem value="todo">Todo</SelectItem>
                    <SelectItem value="inProgress">In Progress</SelectItem>
                    <SelectItem value="done">Done</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Button size="lg" className="" onClick={handleSave}>
                Save
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <XMarkIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
