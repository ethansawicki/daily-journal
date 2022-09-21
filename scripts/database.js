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

export const exportJournalEntries = () => {
   return journalEntries.entries.map(journal => ({...journal}))
}