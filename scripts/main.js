import { renderEntries } from "./journal-entries.js"
import { entryDate } from "./entry-date.js"
import { conceptsCovered } from "./concepts.js"
import { entryForm } from "./entryform.js"
import { moodSelector } from "./mood.js"

const renderJournalEntryForm = () => {
    const formRender = document.querySelector('.entryForm')
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
    renderHTML += `<button class="recordEntry--Button">Record Journal Entry</button>`
    return formRender.innerHTML = renderHTML
}

const renderAll = () => {
    renderJournalEntryForm()
    renderEntries()
}

renderAll()