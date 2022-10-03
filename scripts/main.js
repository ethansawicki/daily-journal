import { fetchEntries } from "./database.js"
import { parseLocalStorage } from "./edit-entry.js"
import { renderEditForm, renderJournalEntryForm} from "./journalEntryRender.js"

const mainContainer = document.querySelector('.entries')

const renderAll = async () => {
    await fetchEntries()
    mainContainer.innerHTML = renderJournalEntryForm()
}

renderAll()

mainContainer.addEventListener('stateChanged', event => {
    renderAll()
})

const renderEdit = async () => {
    await fetchEntries()
    mainContainer.innerHTML = renderEditForm()
    parseLocalStorage()
}

mainContainer.addEventListener('renderEdit', event => {
    renderEdit()
    window.scrollTo(0,0)
})