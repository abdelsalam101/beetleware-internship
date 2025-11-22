// Day 8/utils.ts

// -----------------------------
// 1) sumNumbers
// -----------------------------
// Takes an array of numbers and returns the sum.
// TypeScript knows that both the input and output are numbers.

export function sumNumbers(values: number[]): number {
  let total = 0;
  for (const n of values) {
    total += n;
  }
  return total;
}

// Example:
// const total = sumNumbers([1, 2, 3]); // total: number



// -----------------------------
// 2) cleanNumbers
// -----------------------------
// Removes null and undefined from an array of (number | null | undefined)
// and returns only number[].
// This uses a simple type guard + narrowing idea, but without generics.

function isNumber(value: number | null | undefined): value is number {
  return value !== null && value !== undefined;
}

export function cleanNumbers(values: Array<number | null | undefined>): number[] {
  return values.filter(isNumber);
}

// Example:
// const raw = [1, null, 2, undefined, 3];
// const cleaned = cleanNumbers(raw); // cleaned: number[]



// -----------------------------
// 3) filterByStatus
// -----------------------------
// Uses a literal union type for status: "todo" | "in-progress" | "done"

export type TodoStatus = "todo" | "in-progress" | "done";

export type Todo = {
  id: number;
  title: string;
  status: TodoStatus;
};

export function filterByStatus(todos: Todo[], status: TodoStatus): Todo[] {
  return todos.filter((todo) => todo.status === status);
}

// Example:
// const todos: Todo[] = [
//   { id: 1, title: "Learn TS", status: "todo" },
//   { id: 2, title: "Practice", status: "in-progress" },
//   { id: 3, title: "Submit task", status: "done" },
// ];
// const doneTodos = filterByStatus(todos, "done"); // Todo[] with only done items



// -----------------------------
// 4) formatResult (union + narrowing with "in")
// -----------------------------
// A small example of union + narrowing using the "in" operator.

export type SuccessResult = {
  ok: true;
  data: string;
};

export type ErrorResult = {
  ok: false;
  error: string;
};

export type Result = SuccessResult | ErrorResult;

export function formatResult(result: Result): string {
  if (result.ok) {
    // Here TypeScript knows result is SuccessResult
    return `Success: ${result.data}`;
  } else {
    // Here TypeScript knows result is ErrorResult
    return `Error: ${result.error}`;
  }
}

// Example:
// const r1: SuccessResult = { ok: true, data: "Saved" };
// const r2: ErrorResult = { ok: false, error: "Network error" };
// formatResult(r1); // "Success: Saved"
// formatResult(r2); // "Error: Network error"

