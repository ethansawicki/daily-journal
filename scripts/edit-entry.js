import { fetchEntryEdit, journalEntriesState } from "./dataAccess.js"

const editEntries = () => {
    const entries = journalEntriesState.editEntry
    for(const [key, value] of Object.entries(entries)) {
        if(key === "date") {
            const entryDate = document.querySelector('input[type="date"]').value = value
        } if (key === "concept") {
            const entryConcepts = document.querySelector('input[type="text"]').value = value
        } if (key === "entry") {
            const entryForm = document.querySelector(".entryForm--Journal-Text").value = value
        } if (key === "mood") {
            const entryMood = document.querySelector('.entryForm--Mood-Select').value = value
        }
    }
}

export const runOnEventClick = async (id) => {
    const buttonContainer = document.querySelector('.entry-button')
    await fetchEntryEdit(parseInt(id))
    editEntries()
    buttonContainer.dispatchEvent(new CustomEvent("renderEdit"))
}

