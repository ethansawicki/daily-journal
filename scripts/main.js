import { fetchEntries } from "./dataAccess.js"
import { showEntryForm, journalEntries, submitNewButton, submitEditButton} from "./journalEntryRender.js"
import { postEntries,deleteSelectedEntry, modifyEntry, journalEntriesState } from "./dataAccess.js"
import { runOnEventClick } from "./edit-entry.js"

const entryContainer = document.querySelector('.entries')
const journalContainer = document.querySelector(".journal-Entries")
let buttonContainer = document.querySelector(".entry-button")

buttonContainer.addEventListener(
    "click",
    (event) => {
        const entryDate = document.querySelector('input[type="date"]')?.value
        const entryConcepts = document.querySelector('input[type="text"]')?.value
        const entryForm = document.querySelector(".entryForm--Journal-Text")?.value
        const entryMood = document.querySelector('.entryForm--Mood-Select')?.value
        const entry = {}
        if(event.target.classList.contains('recordEntry--Button')) {
                entry.date = entryDate,
                entry.concept = entryConcepts,
                entry.entry = entryForm,
                entry.mood = entryMood
            postEntries(entry)
        } else if (event.target.id.startsWith('editEntry--')) {
                const id = journalEntriesState.editEntry.map(entryId => {return entryId.id})
                entry.date = entryDate,
                entry.concept = entryConcepts,
                entry.entry = entryForm,
                entry.mood = entryMood
                console.log(id)
            modifyEntry(entry, parseInt(id))
        }
    }
)
    
    
journalContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete--")) {
        clickEvent.preventDefault()
        const [,entryId] = clickEvent.target.id.split("--")
        deleteSelectedEntry(parseInt(entryId))
    }
})
    
journalContainer.addEventListener(
    "click",
    (event) => {
        if(event.target.id.startsWith("edit--")) {
            event.preventDefault()
            const [,entryId] = event.target.id.split("--")
            runOnEventClick(entryId)
        } 
    }
)

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
    renderEntryForm()
    renderButton()
})

buttonContainer.addEventListener('renderEdit', (event) => {
    buttonContainer = document.querySelector(".entry-button")
    buttonContainer.innerHTML = submitEditButton()
})