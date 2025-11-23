// Day 9/helpers.ts

// =======================================
// 1) Generic Result<T>
//    - يمثل يا نجاح بقيمة T
//    - يا فشل برسالة error
// =======================================

export type Result<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

export function ok<T>(value: T): Result<T> {
  return { ok: true, value };
}

export function err<T = never>(message: string): Result<T> {
  return { ok: false, error: message };
}

// Example usage:
// const r1: Result<number> = ok(42);
// const r2: Result<number> = err("Something went wrong");
//
// if (r1.ok) {
//   console.log("value:", r1.value);
// } else {
//   console.log("error:", r1.error);
// }


// =======================================
// 2) safeMap<T, U>
//    - نفس فكرة Array.map
//    - بس:
//      * لو items = null أو undefined → يرجّع [] فاضية
//      * فيه generics بسيطة T, U
// =======================================

export function safeMap<T, U>(
  items: T[] | null | undefined,
  fn: (item: T) => U
): U[] {
  if (!items || items.length === 0) return [];
  return items.map(fn);
}

// Example:
// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Sara" },
// ];
// const names = safeMap(users, u => u.name);
// // names: string[] = ["Ali", "Sara"]


// =======================================
// 3) safeFilter<T>
//    - نفس فكرة Array.filter
//    - بس:
//      * لو items = null أو undefined → يرجّع [] فاضية
//      * generic على النوع T
// =======================================

export function safeFilter<T>(
  items: T[] | null | undefined,
  predicate: (item: T) => boolean
): T[] {
  if (!items || items.length === 0) return [];
  return items.filter(predicate);
}

// Example:
// const users = [
//   { id: 1, isAdmin: true },
//   { id: 2, isAdmin: false },
// ];
// const admins = safeFilter(users, u => u.isAdmin);
// // admins: { id: number; isAdmin: boolean }[]
