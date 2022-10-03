export const moodSelector = () => {
    let mood = `<label class="section-title" for="mood">Mood</label>`
    mood += `<select name="mood" class="entryForm--Mood-Select">
    <option name="mood" value="Select Mood">Select Mood</option>
    <option name="mood" value="happy">Happy 😊</option>
    <option name="mood" value="sadge">Sadge 😥</option>
    <option name="mood" value="indifferent">Indifferent 😐</option>
    </select>`
    return mood
}