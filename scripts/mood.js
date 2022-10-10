export const moodSelector = () => {
    let mood = `<label class="section-title" for="mood">Mood</label>`
    mood += `<select name="mood" class="entryForm--Mood-Select">
    <option name="mood" value="Select Mood">Select Mood</option>
    <option name="mood" value="Happy">Happy 😊</option>
    <option name="mood" value="Sadge">Sadge 😥</option>
    <option name="mood" value="Indifferent">Indifferent 😐</option>
    <option name="mood" value="Pissed">PISSED!</option>
    </select>`
    return mood
}