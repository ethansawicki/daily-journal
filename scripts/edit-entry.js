import { fetchEntryEdit, journalEntriesState } from "./dataAccess.js"

const editEntries = () => {
    const entries = journalEntriesState.editEntry
    for(const entry of entries) {
        const entryDate = document.querySelector('input[type="date"]').value = entry.date
        const entryConcepts = document.querySelector('input[type="text"]').value = entry.concept
        const entryForm = document.querySelector(".entryForm--Journal-Text").value = entry.entry
        const entryMood = document.querySelector('.entryForm--Mood-Select').value = entry.mood
        console.log(entry.mood)
    }
}

export const runOnEventClick = async (id) => {
    const buttonContainer = document.querySelector('.entry-button')
    await fetchEntryEdit(parseInt(id))
    editEntries()
    buttonContainer.dispatchEvent(new CustomEvent("renderEdit"))
}

