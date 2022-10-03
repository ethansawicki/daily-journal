import { exportJournalEntries } from "./database.js";

const listEntries = (entry) => {
    let html = ""
    html += `<ul id="entry--${entry.id}">`
    html += `<li id="entry--id">Entry #: ${entry.id}</li>`
    html += `<li id="concept--${entry.concept}">Concept: ${entry.concept}</li>`
    html += `<li id="entry--${entry.entry}">Entry: ${entry.entry}</li>`
    html += `<li id="date--${entry.date}">Date: ${entry.date}</li>`
    html += `<li id="mood--${entry.mood}">Mood: ${entry.mood}</li>`
    html += `<button class="edit_Button" id="edit--${entry.id}">Edit</button>`
    html += `<button class="delete_Button" id="delete--${entry.id}">Delete</button>`
    html += `</ul>`
    return html
}

export const renderEntries = () => {
    const entries = exportJournalEntries()
    let renderEntries = `<div>${entries.map(listEntries).join("")}</div>`
    return renderEntries
}