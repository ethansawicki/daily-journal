import { entryDate } from "./entry-date.js"
import { conceptsCovered } from "./concepts.js"
import { entryForm } from "./entryform.js"
import { moodSelector } from "./mood.js"
import { renderEntries } from "./journal-entries.js"
import { postEntries,deleteSelectedEntry, modifyEntry } from "./dataAccess.js"
import { runOnEventClick } from "./edit-entry.js"

const journalContainer = document.querySelector(".journal-Entries")
const buttonContainer = document.querySelector(".entry-button")

buttonContainer.addEventListener(
    "click",
    (event) => {
        event.preventDefault()
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
        // } else if (event.target.classList.contains('editEntry--Button')) {
        //     const storedID = window.localStorage.getItem("postID")
        //     const id = JSON.parse(storedID)
        //         entry.date = entryDate,
        //         entry.concept = entryConcepts,
        //         entry.entry = entryForm,
        //         entry.mood = entryMood
        //     modifyEntry(entry, parseInt(id))
        }
    }
)
    
    
// journalContainer.addEventListener("click", clickEvent => {
//     if(clickEvent.target.id.startsWith("delete--")) {
//         const [,entryId] = clickEvent.target.id.split("--")
//         deleteSelectedEntry(parseInt(entryId))
//     }
// })
    
// journalContainer.addEventListener(
//     "click",
//     (event) => {
//         if(event.target.id.startsWith("edit--")) {
//             const [,entryId] = event.target.id.split("--")
//             runOnEventClick(entryId)
//             //window.localStorage.setItem("postID", JSON.stringify(entryId))
//         } 
//     }
// )

export const submitNewButton = () => {
    let submitButtonHTML = ""
    submitButtonHTML += `<fieldset class="entryForm--Field--Button">`
    submitButtonHTML += `<button class="recordEntry--Button">Submit New</button>`
    submitButtonHTML += `</fieldset>`
    return submitButtonHTML
}

export const submitEditButton = () => {
    let submitEditButtonHTML = ""
    submitEditButtonHTML += `<fieldset class="entryForm--Field--Button">`
    submitEditButtonHTML += `<button class="editEntry--Button">Submit Edit</button>`
    submitEditButtonHTML += `</fieldset>`
    return submitEditButtonHTML
}

export const showEntryForm = () => {
    let renderHTML = ""
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += entryDate()
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += conceptsCovered()
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += entryForm()
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += moodSelector()
    renderHTML += `</fieldset>`
    return renderHTML
}


export const journalEntries = () => {
    let journalHTML = ""
    journalHTML += `<fieldset class="entryForm--Field">`
    journalHTML += renderEntries()
    journalHTML += `</fielset>`
    return journalHTML
}