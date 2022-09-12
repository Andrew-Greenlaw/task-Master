import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"

export class TasksController {
  constructor() {
  }
  removeTask(id) {
    if (window.confirm('Do you want to remove this Task?')) {
      tasksService.removeTask(id)
    }
  }
  addTask(listId) {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      let form = window.event.target
      let formData = getFormData(form)
      // @ts-ignore
      formData.listId = listId
      console.log('does this work good plz', formData)
      tasksService.addTask(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[ADD TASK]', error)
    }
  }
  toggleCompleted(id) {
    tasksService.toggleCompleted(id)
  }
}