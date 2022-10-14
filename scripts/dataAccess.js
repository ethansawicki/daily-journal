export const journalEntriesState = {
    entries: [],
    editEntry: []
}

export const fetchEntries = async () => {
    const API = "http://localhost:8088"
    const data = await fetch(`${API}/entries`)
    const jsonData = await data.json()
    journalEntriesState.entries = jsonData 
}

export const fetchEntryEdit = async (id) => {
    const API = "http://localhost:8088/entries"
    const data = await fetch(`${API}/${id}`)
    const jsonData = await data.json()
    journalEntriesState.editEntry.push(jsonData)
    console.log(journalEntriesState.editEntry)
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
    const journalContainer = document.querySelector('.journal-Entries')
    const response = await fetch(`${API}/entries/${id}`, modify)
    const responseJSON = await response.json()
    journalContainer.dispatchEvent(new CustomEvent('stateChanged'))
    return responseJSON
}

export const deleteSelectedEntry = async (id) => {
    const API = "http://localhost:8088"
    await fetch(`${API}/entries/${id}`, {method: "DELETE"})
    const mainContainer = document.querySelector('.journal-Entries')
    mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
}

export const exportJournalEntries = () => {
   return journalEntriesState.entries.map(journal => ({...journal}))
}