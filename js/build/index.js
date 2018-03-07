'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
    function Note(title) {
        _classCallCheck(this, Note);

        this.title = title;
        this.element = this.createElement(title);
    }

    _createClass(Note, [{
        key: 'createElement',
        value: function createElement(title) {
            var newNote = document.createElement('div');
            newNote.className = "card newNote";
            newNote.innerHTML = '<p>' + title + '</p><a href="#" class="card-remove">Remove</a>';

            var a = newNote.lastChild;
            a.addEventListener('click', this.remove.bind(newNote));

            return newNote;
        }
    }, {
        key: 'add',
        value: function add() {
            // HINT🤩
            // this function should append the note to the screen somehow
            document.querySelector(".notes").appendChild(this.element);
        }
    }, {
        key: 'saveToStorage',
        value: function saveToStorage() {
            // HINT🤩
            // localStorage only supports strings, not arrays
            // if you want to store arrays, look at JSON.parse and JSON.stringify

            localStorage.setItem(this.title, this.title);
        }
    }, {
        key: 'remove',
        value: function remove() {
            // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
            // in this function, 'this' will refer to the current note element
            this.remove();
        }
    }]);

    return Note;
}();

var App = function () {
    function App() {
        _classCallCheck(this, App);

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

    _createClass(App, [{
        key: 'loadNotesFromStorage',
        value: function loadNotesFromStorage() {
            // HINT🤩
            // load all notes from storage here and add them to the screen
            // something like note.add() in a loop would be nice
            //let storage = [],
            var keys = Object.keys(localStorage);
            var i = keys.length;

            while (i--) {
                //storage.push( localStorage.getItem(keys[i]) );
                var note = new Note(localStorage.getItem(keys[i]));
                note.add();
            }
        }
    }, {
        key: 'createNote',
        value: function createNote(e) {
            // this function should create a new note by using the Note() class
            var noteText = document.getElementById("txtAddNote").value;
            var note = new Note(noteText);
            note.add();
            note.saveToStorage();
            this.reset();
        }
    }, {
        key: 'reset',
        value: function reset() {
            // this function should reset the form
            document.getElementById("txtAddNote").value = "";
        }
    }]);

    return App;
}();

var app = new App();

//# sourceMappingURL=index.js.map