const fs = require('fs')
const chalk = require('chalk')

const success_msg = chalk.green.bold.inverse
const warning_msg = chalk.yellow.bold.inverse
const fail_msg = chalk.red.bold.inverse
const title_msg = chalk.blue.bold.inverse

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        dataJson = dataBuffer.toString()
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

const getNotes = () => {
    console.log(title_msg('Note List'))
    return loadNotes();
}

const addNote = (title, description) => {
    const notes = loadNotes()

    duplicateNote = notes.find((note) => title == note.title)

    if (duplicateNote) {
        console.log(fail_msg('Note already exists!'))
        return;
    }

    notes.push({
        title: title,
        description: description
    })

    saveNote(notes)

    console.log(success_msg('New note added successfully!'))
}

const saveNote = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}


const removeNote = (title) => {

    const notes = loadNotes()
    updateNotes = notes.filter((note, index) => {
        return title != note.title
    })
    
    if (notes.length == updateNotes.length) {
        console.log(warning_msg('No matching note found!'));
        return;
    }

    saveNote(updateNotes)

    console.log(success_msg('Note deleted successfully!'));
}

const readNote = (title) => {
    const notes = loadNotes()

    const result = notes.find((note) => note.title == title)

    if (!result) {
        console.log(fail_msg('Unable to read note!'))
    } else {
        console.log(success_msg(result.title))
        console.log(result.description)
    }
}
module.exports = {
    addNote : addNote,
    getNotes : getNotes,
    removeNote : removeNote,
    readNote : readNote
}