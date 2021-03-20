# notes-app-nodejs-cli
This is node js command line based manage notes application.

## App Features

1. List Notes
2. Add Note
3. Read Note
4. Remove Note


### List notes command

    node app.js list

### Add note command

    node app.js add --title="{noteTitle}" --desc="{noteDescription}"

### Read specific note command

    node app.js read --title="{noteTitle}"

### Remove specific note command

    node app.js remove --title="{noteTitle}"

### Below npm packages used in this application

* fs
* yargs
* chalk