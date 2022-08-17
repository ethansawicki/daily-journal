import { exportJournal } from "./database.js";

const renderEntries = () => {
    const entries = exportJournal()
    let renderEntries = `<section>`
    for (const entry of entries) {
        renderEntries += `<h3>${entry.concept}</h3>`
        renderEntries += `<ul>`
        renderEntries += `<li>${entry.date}</li>`
        renderEntries += `<li>${entry.entry}</li>`
        renderEntries += `<li>${entry.mood}</li>`
        renderEntries += `</ul>`
        renderEntries += `</section>`
    }
    return document.querySelector("#entries").innerHTML = renderEntries
}

renderEntries()