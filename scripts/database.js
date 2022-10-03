const journalEntries = {
    entries: []
}

const API = "http://localhost:8088"

export const fetchEntries = async () => {
    const data = await fetch(`${API}/entries`)
    const jsonData = await data.json()
    journalEntries.entries = jsonData 
}

export const postEntries = async (data) => {
    const post = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const mainContainer = document.querySelector('.entries')
    const response = await fetch(`${API}/entries`, post)
    const responseJSON = await response.json()
    mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
    return responseJSON
}

export const modifyEntry = async (data, id) => {
    const modify = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    const mainContainer = document.querySelector('.entries')
    const response = await fetch(`${API}/entries/${id}`, modify)
    const responseJSON = await response.json()
    mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
    return responseJSON
}

export const deleteSelectedEntry = async (id) => {
    await fetch(`${API}/entries/${id}`, {method: "DELETE"})
    const mainContainer = document.querySelector('.entries')
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const exportJournalEntries = () => {
   return journalEntries.entries.map(journal => ({...journal}))
}

export const findEntriesDate = (entry) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entry)) {
            return entries.date
        }
    }
}

export const findEntriesConcept = (entry) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entry)) {
            return entries.concept
        }
    }
}

export const findEntriesEntry = (entry) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entry)) {
            return entries.entry
        }
    }
}

export const findEntriesMood = (entry) => {
    for(const entries of journalEntries.entries) {
        if(entries.id === parseInt(entry)) {
            return entries.mood
        }
    }
}