import { findEntriesConcept, findEntriesEntry, findEntriesMood, findEntriesDate } from "./database.js"

export const runOnEventClick = (fetchedID) => {
    const journalEntryDate = findEntriesDate(fetchedID)
    const journalEntryConcept = findEntriesConcept(fetchedID)
    const journalEntriesEntry = findEntriesEntry(fetchedID)
    const journalEntriesMood = findEntriesMood(fetchedID)
    const updatedDate = journalEntryDate
    const updatedMoodSelect = journalEntriesMood
    const updatedConcept = journalEntryConcept
    const updatedEntry = journalEntriesEntry
    const postID = fetchedID
    const updatedPost = {
        date: updatedDate,
        concept: updatedConcept,
        entry: updatedEntry,
        mood: updatedMoodSelect
    }
    window.localStorage.setItem("postID", JSON.stringify(postID))
    window.localStorage.setItem("updatedPost", JSON.stringify(updatedPost))
}

export const parseLocalStorage = () => {
    const editObjArray = []
    const editObject = window.localStorage.getItem("updatedPost")
    editObjArray.push(JSON.parse(editObject))
    //console.log(editObjArray)
    for (const values of editObjArray) {
        document.querySelector('input[type="date"]').value = values.date
        document.querySelector('.entryForm--Mood-Select').value = values.mood
        document.querySelector('.entryForm--Concepts-Text').innerText = values.concept
        document.querySelector('.entryForm--Journal-Text').innerText = values.entry
    }
}