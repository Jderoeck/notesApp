class Note {
    constructor(title) {
        this.title = title;
        this.element = this.createElement(title);
    }

    createElement(title) {
        let newNote = document.createElement('div');
        newNote.className = "card newNote";
        newNote.innerHTML = `<p>${title}</p><a href="#" class="card-remove">Remove</a>`;

        let a = newNote.lastChild;
        a.addEventListener('click', this.remove.bind(newNote));

        return newNote;
    }

    add() {
        // HINT🤩
        // this function should append the note to the screen somehow
        document.querySelector(".notes").appendChild(this.element);
    }

    saveToStorage() {
        // HINT🤩
        // localStorage only supports strings, not arrays
        // if you want to store arrays, look at JSON.parse and JSON.stringify

        localStorage.setItem(this.title, this.title);
    }

    remove() {
        // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
        // in this function, 'this' will refer to the current note element
        this.remove();
    }
}

class App {
    constructor() {
        console.log("👊🏼 The Constructor!");


        // HINT🤩
        // clicking the button should work
        this.btnAdd = document.getElementById("btnAddNote");
        this.input = document.getElementById("txtAddNote");
        this.btnAdd.addEventListener("click", this.createNote.bind(this));
        //this.input.addEventListener("keyup", this.createNote.bind(this));
        // pressing the enter key should also work

        this.loadNotesFromStorage();
    }

    loadNotesFromStorage() {
        // HINT🤩
        // load all notes from storage here and add them to the screen
        // something like note.add() in a loop would be nice
        //let storage = [],
        let keys = Object.keys(localStorage);
        let i = keys.length;

        while (i--) {
            //storage.push( localStorage.getItem(keys[i]) );
            let note = new Note(localStorage.getItem(keys[i]));
            note.add();
        }

    }

    createNote(e) {
        // this function should create a new note by using the Note() class
        let noteText = document.getElementById("txtAddNote").value;
        let note = new Note(noteText);
        note.add();
        note.saveToStorage();
        this.reset();
    }

    reset() {
        // this function should reset the form
        document.getElementById("txtAddNote").value = "";
    }

}

let app = new App();
