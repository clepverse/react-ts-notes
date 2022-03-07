import React, { useState } from "react";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteList } from "../../context/NoteListContext";
import Note from "../Note";

import "./styles.scss";

export default function Notes() {
  const { highlight, setHighlight } = useHighlight();

  const { noteList, setNoteList } = useNoteList();

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
