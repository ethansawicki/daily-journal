export const moodSelector = () => {
    let mood = `<label class="section-title" for="mood">Mood</label>`
    mood += `<select name="mood" class="entryForm--Mood-Select">
    <option value="happy">Happy 😊</option>
    <option value="sadge">Sadge 😥</option>
    <option value="indifferent">Indifferent 😐</option>
    </select>`
    return mood
}