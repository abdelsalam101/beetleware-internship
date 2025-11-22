import {
  sumNumbers,
  cleanNumbers,
  filterByStatus,
  formatResult,
  Todo,
  SuccessResult,
  ErrorResult,
} from "./utils";

const nums = [1, 2, 3];
console.log("sumNumbers:", sumNumbers(nums));

const dirty = [1, null, 2, undefined, 3];
console.log("cleanNumbers:", cleanNumbers(dirty));

const todos: Todo[] = [
  { id: 1, title: "Learn TS", status: "todo" },
  { id: 2, title: "Practice", status: "in-progress" },
  { id: 3, title: "Submit task", status: "done" },
];

console.log("done todos:", filterByStatus(todos, "done"));

const ok: SuccessResult = { ok: true, data: "Saved!" };
const fail: ErrorResult = { ok: false, error: "Network error" };

console.log(formatResult(ok));
console.log(formatResult(fail));
