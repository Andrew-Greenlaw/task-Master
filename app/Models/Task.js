import { generateId } from "../Utils/generateId.js"

export class Task {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.listId = data.listId
    this.completed = data.completed || false

  }

  get Template() {
    return/*html*/`
  <li class="d-flex justify-content-between list-group-item rounded task elevation-2 mb-2 px-2 p-1 ">
  <div>
  <input onchange="app.tasksController.toggleCompleted('${this.id}')" type="checkbox" ${this.completed ? 'checked' : ''}>
  <span class="ms-5">${this.name}</span>
  </div>
    <span> <i onclick="app.tasksController.removeTask('${this.id}')" class="mdi mdi-close text-danger selectable"  title="Remove Item"></i></span>
  </li>
`
  }
}