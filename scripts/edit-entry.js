import { findEntriesConcept, findEntriesEntry, findEntriesMood, findEntriesDate } from "./dataAccess.js"

export const runOnEventClick = (id) => {
    //const storedID = window.localStorage.getItem("postID")
    //const id = JSON.parse(storedID)
    const journalDate = findEntriesDate(id)
    const journalConcept = findEntriesConcept(id)
    const journalEntries = findEntriesEntry(id)
    const journalMood = findEntriesMood(id)
}