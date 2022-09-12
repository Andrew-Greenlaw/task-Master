import { appState } from "../AppState.js"
import { List } from "../Models/List.js"
import { saveState } from "../Utils/Store.js"


class ListsService {

  removeList(id) {
    let filtered = appState.lists.filter(l => l.id !== id)
    appState.lists = filtered
    saveState('lists', appState.lists)
  }
  addList(formData) {
    let list = new List(formData)
    appState.lists = [list, ...appState.lists]
    console.log('testing the addlist', appState.lists)
    // TODO add save state here
    saveState('lists', appState.lists)


  }
  constructor() {
  }
}

export const listsService = new ListsService()