import React, { useEffect, useState } from "react";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";
import Note from "../Note";

import "./styles.scss";

export default function Notes() {
  const { setTitle, setDescription } = useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList();

  useEffect(() => {
    getLocalNotes();
  }, []);

  useEffect(() => {
    if (highlight) {
      const highlightedNote: any = noteList.find(
        (note) => eval(note.id) === highlight
      );
      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [highlight]);

  const getLocalNotes = (): void => {
    let localNotes: any = localStorage.getItem("notes");
    if (localNotes === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    } else {
      localNotes = JSON.parse(localNotes);
      setNoteList(localNotes);
    }
  };

  return (
    <section className="notes">
      {noteList.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          highlight={highlight}
          setHighlight={setHighlight}
        />
      ))}
    </section>
  );
}
