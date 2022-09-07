const journalEntries = [
    {
        id: 1,
        date: "08/01/2022",
        concept: "Leonids Toys",
        entry: "Completed Leonids Toys on this past Saturday (07/30/2022)",
        mood: "Alive"
    },
    {
        id: 2,
        date: "08/01/2022",
        concept: "New Groups",
        entry: "We got new groups this past Saturday (07/30/2022)",
        mood: "Sadge"
    }
]

export const exportJournalEntries = () => {
    const journalCopy = journalEntries.map(journal => {return{...journal}})
    return journalCopy
}

const getNewJournalId = () => {
    const order = exportJournalEntries()
    let highestOrderId = order.sort((a, b) => b.id - a.id)[0].id
    return highestOrderId + 1
}

export const addNewEntry = (newEntry) => {
    const newId = getNewJournalId()
    newEntry.id = newId
    journalEntries.push(newEntry)
    document.dispatchEvent(new CustomEvent("stateChanged"))   
}