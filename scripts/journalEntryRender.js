import { entryDate } from "./entry-date.js"
import { conceptsCovered } from "./concepts.js"
import { entryForm } from "./entryform.js"
import { moodSelector } from "./mood.js"
import { renderEntries } from "./journal-entries.js"
import { postEntries } from "./database.js"



document.addEventListener(
    "click",
    (event) => {
        if(event.target.classList.contains('recordEntry--Button')) {
            event.preventDefault()// why do we need this? and why is it refreshing page and scrolling to top?
            const entryDate = document.querySelector('input[type=date]')?.value
            const entryConcepts = document.querySelector('.entryForm--Concepts-Text').innerText
            const entryForm = document.querySelector(".entryForm--Journal-Text").innerText
            const entryMood = document.querySelector('.entryForm--Mood-Select')?.value
            const newEntry = {
                date: entryDate,
                concept: entryConcepts,
                entry: entryForm,
                mood: entryMood
            }
            postEntries(newEntry)
        }
    }
)

export const renderJournalEntryForm = () => {
    let renderHTML = `<fieldset class="entryForm--Field">`
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
    renderHTML += `<button class="recordEntry--Button">Record Journal Entry</button>`
    renderHTML += `</fieldset>`
    renderHTML += `<fieldset class="entryForm--Field">`
    renderHTML += renderEntries()
    renderHTML += `</fielset>`
    return renderHTML
}