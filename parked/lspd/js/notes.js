const notesBox = document.getElementById("notesBox");
const lsNotes = localStorage.getItem("notes");

if (lsNotes !== null) {
    notesBox.value = lsNotes;
}

function saveNotes() {
    window.localStorage.setItem("notes", notesBox.value);
    alert("Saved Notes. You can now safely refresh.");
}

function clearNotes() {
    window.localStorage.removeItem("notes");
    notesBox.value = "";
    alert("Cleared Notes");
}