import { entryDate } from "./entry-date.js"
import { conceptsCovered } from "./concepts.js"
import { entryForm } from "./entryform.js"
import { moodSelector } from "./mood.js"
import { renderEntries } from "./journal-entries.js"
import { postEntries,deleteSelectedEntry, modifyEntry } from "./database.js"
import { runOnEventClick } from "./edit-entry.js"

const mainContainer = document.querySelector('.entries')

mainContainer.addEventListener(
    "click",
    (event) => {
        const entryDate = document.querySelector('input[type="date"]')?.value
        const entryConcepts = document.querySelector('.entryForm--Concepts-Text').innerText
        const entryForm = document.querySelector(".entryForm--Journal-Text").innerText
        const entryMood = document.querySelector('.entryForm--Mood-Select')?.value
        if(event.target.classList.contains('recordEntry--Button')) {
            const newEntry = {
                date: entryDate,
                concept: entryConcepts,
                entry: entryForm,
                mood: entryMood
            }
            postEntries(newEntry)
        } else if (event.target.classList.contains('editEntry--Button')) {
            const storedID = window.localStorage.getItem("postID")
            const id = JSON.parse(storedID)
            const editEntry = {
                date: entryDate,
                concept: entryConcepts,
                entry: entryForm,
                mood: entryMood
            }
            modifyEntry(editEntry, parseInt(id))
            window.localStorage.clear()
        }
    }
)
    
    
mainContainer.addEventListener("click", clickEvent => {
    if(clickEvent.target.id.startsWith("delete--")) {
        const [,entryId] = clickEvent.target.id.split("--")
        deleteSelectedEntry(parseInt(entryId))
    }
})
    
mainContainer.addEventListener(
    "click",
    (event) => {
        if(event.target.id.startsWith("edit--")) {
            const [,entryId] = event.target.id.split("--")
            runOnEventClick(entryId)
            mainContainer.dispatchEvent(new CustomEvent('renderEdit'))
        } 
    }
)

const submitNewButton = () => {
    const html = `<button class="recordEntry--Button">Submit New</button>`
    return html
}

const submitEditButton = () => {
    const html = `<button class="editEntry--Button">Submit Edit</button>`
    return html
}

export const renderJournalEntryForm = () => {
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
    renderHTML += `<fieldset class="entryForm--Field--Button">`
    renderHTML += submitNewButton()
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += renderEntries()
    renderHTML += `</fielset>`
    return renderHTML
}

export const renderEditForm = () => {
    let renderHTML = ''
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
    renderHTML += `<fieldset class="entryForm--Field--Button">`
    renderHTML += submitEditButton()
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += renderEntries()
    renderHTML += `</fielset>`
    return renderHTML
}