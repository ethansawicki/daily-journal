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
    },
    {
        id: 3,
        date: "08/01/2022",
        concept: "Test 3",
        entry: "Blank",
        mood: "Happy"
    },
    {
        id: 4,
        date: "08/01/2022",
        concept: "Test 4",
        entry: "Blank",
        mood: "Alive"
    },
    {
        id: 5,
        date: "08/01/2022",
        concept: "Test 5",
        entry: "Blank",
        mood: "Alive"
    },
    {
        id: 6,
        date: "08/01/2022",
        concept: "Test 6",
        entry: "Blank",
        mood: "Alive"
    },
    {
        id: 7,
        date: "08/01/2022",
        concept: "Test 7",
        entry: "Blank",
        mood: "Alive"
    }
]

for (const entry of journalEntries) {
    console.log(entry.entry)
}

for (const entries of journalEntries) {
    console.log(entries)
}

for (const entries of journalEntries) {
    console.log(entries.concept)
}

for (const entries of journalEntries) {
    if (entries.id % 2 !== 0) {
        console.log(`${entries.id} is the odd ID number`)
    }
}