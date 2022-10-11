import { entryDate } from "./entry-date.js"
import { conceptsCovered } from "./concepts.js"
import { entryForm } from "./entryform.js"
import { moodSelector } from "./mood.js"
import { renderEntries } from "./journal-entries.js"

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
    submitEditButtonHTML += `<button id="editEntry--Button">Submit Edit</button>`
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
    journalHTML += `<fieldset class="entryForm--Field-Entries">`
    journalHTML += renderEntries()
    journalHTML += `</fielset>`
    return journalHTML
}