const journalEntries = {
    entries: []
}

export const fetchEntries = async () => {
    const API = "http://localhost:8088"
    const data = await fetch(`${API}/entries`)
    const jsonData = await data.json()
    journalEntries.entries = jsonData 
}

export const postEntries = async (data) => {
    const API = "http://localhost:8088"
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const journalContainer = document.querySelector('.journal-Entries')
    const response = await fetch(`${API}/entries`, post)
    const responseJSON = await response.json()
    journalContainer.dispatchEvent(new CustomEvent('stateChanged'))
    return responseJSON
}

export const modifyEntry = async (data, id) => {
    const API = "http://localhost:8088"
    const modify = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const mainContainer = document.querySelector('.journal-Entries')
    const response = await fetch(`${API}/entries/${id}`, modify)
    const responseJSON = await response.json()
    mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
    return responseJSON
}

export const deleteSelectedEntry = async (id) => {
    const API = "http://localhost:8088"
    await fetch(`${API}/entries/${id}`, {method: "DELETE"})
    const mainContainer = document.querySelector('.journal-entries')
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const exportJournalEntries = () => {
   return journalEntries.entries.map(journal => ({...journal}))
}

export const findEntriesDate = (entryId) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entryId)) {
            return document.querySelector('input[type="date"]').value = entries.date
        }
    }
}

export const findEntriesConcept = (entryId) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entryId)) {
            return document.querySelector('.entryForm--Concepts-Text').innerText = entries.concept
        }
    }
}

export const findEntriesEntry = (entryId) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entryId)) {
            return document.querySelector('.entryForm--Journal-Text').innerText = entries.entry
        }
    }
}

export const findEntriesMood = (entryId) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entryId)) {
            return document.querySelector('.entryForm--Mood-Select').value = entries.mood
        }
    }
}