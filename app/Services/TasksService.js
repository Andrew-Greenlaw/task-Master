import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { saveState } from "../Utils/Store.js"

class TasksService {
  toggleCompleted(id) {
    let task = appState.tasks.find(task => task.id == id)
    if (!task) {
      throw new Error('Bad ID')
    }
    task.completed = !task.completed
    appState.emit('tasks')
    saveState('tasks', appState.tasks)
  }
  addTask(formData) {
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    console.log('testing add task', appState.tasks)
    saveState('tasks', appState.tasks)

  }
  removeTask(id) {
    let filtered = appState.tasks.filter(t => t.id !== id)
    appState.tasks = filtered
    saveState('tasks', appState.tasks)
  }
}
export const tasksService = new TasksService()