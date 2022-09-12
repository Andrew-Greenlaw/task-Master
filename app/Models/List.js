import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"
import { Task } from "./Task.js"


export class List {

  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return/*html*/`
    <div class="col-md-4">
          <div class="card my-4 mx-2 ${this.color} lists">
            <div class="text-center">
              <div class="text-end mt-2 me-2">
                <i onclick="app.listsController.removeList('${this.id}')" class="mdi mdi-close text-light selectable"  title="Remove Item"></i></span>
              </div>
              <div class="text-light mb-4 font">
              <h2>
              ${this.name}
              </h2>
              <h4>${this.UncompletedTasks}/${this.Tasks.length}</h4>
              </div>
            </div>
            <div class="card-body m-1 bg-light d-flex flex-column justify-content-between">
              <div>
                <ul>
                  ${this.TaskTemplates}
                </ul>
              </div>
              <div>
                <form onsubmit="app.tasksController.addTask('${this.id}')">
                  <div class="d-flex border">
                    <input class="form-control square-right border border-dark bg-white" type="text" name="name" required minlength="3" maxlength="15" placeholder="Add Task Here...">
                    <label for="name"></label>
                    <button type="submit" class="btn btn-dark square-left border border-dark" title="Add Item"><b>+</b></button>
                  </div>  
                </form>
              </div>
            </div>
          </div>
        </div>
    `
  }

  get Tasks() {
    let tasks = appState.tasks.filter(task => task.listId == this.id)
    return tasks
  }

  get TaskTemplates() {
    let template = ''
    this.Tasks.forEach(task => template += task.Template)
    return template
  }

  get UncompletedTasks() {
    let uncompleted = 0
    this.Tasks.forEach(task => {
      if (task.completed === false) {
        uncompleted++
      }
    })
    return uncompleted
  }


}