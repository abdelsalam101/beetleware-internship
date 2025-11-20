import { httpClient } from "./httpClient.js";

const formEl = document.getElementById("todo-form");
const inputEl = document.getElementById("todo-input");
const listEl = document.getElementById("todo-list");

let todos = [];

async function loadTodos() {
  todos = await httpClient.get("/todos?_limit=5");
  renderTodos();
}

function renderTodos() {
  listEl.innerHTML = "";

  for (const todo of todos) {
    const li = document.createElement("li");
    li.textContent = todo.title;
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "8px";
    deleteBtn.addEventListener("click", () => handleDelete(todo.id));

    li.appendChild(deleteBtn);
    listEl.appendChild(li);
  }
}

async function handleAdd(event) {
  event.preventDefault();

  const title = inputEl.value.trim();
  if (!title) return;

  const newTodo = await httpClient.post("/todos", {
    title,
    completed: false,
  });

  todos.unshift(newTodo);
  renderTodos();
  inputEl.value = "";
}

async function handleDelete(id) {
  await httpClient.delete(`/todos/${id}`);
  todos = todos.filter((t) => t.id !== id);
  renderTodos();
}

formEl.addEventListener("submit", handleAdd);
loadTodos();
