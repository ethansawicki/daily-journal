import { fetchEntries } from "./database.js"
import { renderJournalEntryForm } from "./journalEntryRender.js"

const mainContainer = document.querySelector('.entries')

const renderAll = async () => {
    await fetchEntries()
    mainContainer.innerHTML = renderJournalEntryForm()
}

renderAll()

mainContainer.addEventListener('stateChanged', event => {
    renderAll()
})