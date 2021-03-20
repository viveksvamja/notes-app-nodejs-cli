const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

const table_row = chalk.white.bold.inverse
const table_row_grey = chalk.grey.bold.inverse

// Add note command builder
yargs.command({
    command : 'add',
    describe : "Add note",
    builder : {
        title: {
            describe: "title of note",
            demandOption: true,
            type: 'string'
        },
        desc: {
            describe: "description of note",
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.desc)
    }
});

// Remove note command builder
yargs.command({
    command : 'remove',
    describe : "Remove note",
    builder : {
        title: {
            describe: "title of note",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

// List note command builder
var count = 1
yargs.command({
    command : 'list',
    describe : "List all notes",
    handler() {
        notes.getNotes().forEach((note) => {
            if (count % 2) {
                console.log(table_row(note.title + ' - ' + note.description))
            } else {
                console.log(table_row_grey(note.title + ' - ' + note.description))
            }
            count++;
        })
    }
});

console.log(yargs.argv)