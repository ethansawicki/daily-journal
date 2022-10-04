import { findEntriesConcept, findEntriesEntry, findEntriesMood, findEntriesDate } from "./database.js"

export const runOnEventClick = () => {
    const storedID = window.localStorage.getItem("postID")
    const id = JSON.parse(storedID)
    const journalDate = findEntriesDate(id)
    const journalConcept = findEntriesConcept(id)
    const journalEntries = findEntriesEntry(id)
    const journalMood = findEntriesMood(id)
}