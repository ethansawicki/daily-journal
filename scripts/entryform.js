export const entryForm = () => {
    let textEntry = `<label class="section-title" for="journalEntry">Journal Entry</label>`
    textEntry += `<div class="entryForm--Journal-Text" name="journalEntry" contenteditable></div>`
    return textEntry
}