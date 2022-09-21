import { exportJournalEntries } from "./database.js";

const listEntries = (entry) => {
    let html = `<ul class="entry--${entry.id}">`
    html += `<li>Concept: ${entry.concept}</li>`
    html += `<li>Entry: ${entry.entry}</li>`
    html += `<li>Date: ${entry.date}</li>`
    html += `<li>Mood: ${entry.mood}</li>`
    html += `</ul>`
    return html
}

export const renderEntries = () => {
    const entries = exportJournalEntries()
    let renderEntries = `<div>${entries.map(listEntries).join("")}</div>`
    return renderEntries
}