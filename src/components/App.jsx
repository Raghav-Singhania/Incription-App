import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import Notes from "../Notes"
import CreateArea from "./CreateArea";


function App(){

    const [notes, setNotes] = React.useState([]);

    function addNote(note){
        console.log(note);
        setNotes((prevNotes)=>{
            return[
                ...prevNotes,
                note
            ];
        });
    }

    function removeNote(note_id){
        setNotes((prevNotes=>{
            return prevNotes.filter((noteItem,ind)=>{
                return (ind!=note_id);
            });
        }));
    }

    return(
        <div>
            <Header />
            <CreateArea onAdd = {addNote} />
            {notes.map((entry, index)=>{
                return(
                    <Note deleteNote = {removeNote}
                        key = {index}
                        id = {index}
                        noteTitle = {entry.title}
                        noteContent = {entry.content}
                    />
                );
            })}

            <Footer/>
        </div>
    );
}
export default App;