import {Priority} from "@/types/priority";

export type Task = {
  id: String,
  title: String,
  status: Status,
  priority: Priority
}