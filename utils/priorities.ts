import {ArrowDownIcon, ArrowRightIcon, ArrowUpIcon} from "@heroicons/react/20/solid";
import {Priority} from "@/types/priority";

export const priorities: Priority[] = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]