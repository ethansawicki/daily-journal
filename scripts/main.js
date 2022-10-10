import { fetchEntries } from "./dataAccess.js"
import { runOnEventClick } from "./edit-entry.js"
import { showEntryForm, journalEntries, submitNewButton, submitEditButton} from "./journalEntryRender.js"

const entryContainer = document.querySelector('.entries')
const journalContainer = document.querySelector(".journal-Entries")
let buttonContainer = document.querySelector(".entry-button")

const renderEntryForm = () => {
    entryContainer.innerHTML = showEntryForm()
}

const renderJournalEntries = async () => {
    await fetchEntries()
    journalContainer.innerHTML = journalEntries()
}

const renderButton = () => {
    buttonContainer.innerHTML = submitNewButton()
}

renderJournalEntries()
renderEntryForm()
renderButton()

journalContainer.addEventListener('stateChanged', event => {
    renderJournalEntries()
})

// entryContainer.addEventListener('renderEdit', event => {
//     runOnEventClick()
//     buttonContainer = document.querySelector(".entry-button")
//     buttonContainer.innerHTML = submitEditButton()
//     window.scrollTo(0,0)
// })