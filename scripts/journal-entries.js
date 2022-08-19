import { exportJournal } from "./database.js";

export const renderEntries = () => {
    const appElement = document.querySelector('.entries')
    const entries = exportJournal()
    let renderEntries = `<fieldset class="entryForm--Field">`
    for (const entry of entries) {
        renderEntries += `<h3><u>${entry.concept}</u></h3>`
        renderEntries += `<ul>`
        renderEntries += `<li class="list--item"><u>Date</u>: ${entry.date}</li>`
        renderEntries += `<li class="list--item"><u>Entry</u>: ${entry.entry}</li>`
        renderEntries += `<li class="list--item"><u>Mood</u>: ${entry.mood}</li>`
        renderEntries += `</ul>`
    }
    renderEntries += `</fieldset>`
    return appElement.innerHTML = renderEntries
}