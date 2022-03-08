import React from "react";

import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import "./styles.scss";

export default function Actions() {
  const { visibleForm, setVisibleForm, setTitle, setDescription } =
    useNoteForm();
  const { highlight, setHighlight } = useHighlight();
  const { noteList, setNoteList } = useNoteList();

  const createHandler = (): void => {
    if (visibleForm && highlight) {
      setTitle("");
      setDescription("");
      setHighlight(false);
    } else {
      setVisibleForm(!visibleForm);
    }
  };

  const editHandler = (): void => {
    if (highlight) {
      const highlightedNote: any = noteList.find(
        (note) => eval(note.id) === highlight
      );

      setTitle(highlightedNote.title);
      setDescription(highlightedNote.description);
      setVisibleForm(!visibleForm);
    }
  };

  const deleteHandler = (): void => {
    if (highlight) {
      setTitle("");
      setDescription("");
      setHighlight(false);

      const highlightedNote = noteList.findIndex(
        (note) => eval(note.id) === highlight
      );
      noteList.splice(highlightedNote, 1);

      setNoteList([...noteList]);
    }
  };

  return (
    <div className="actions">
      <button className="create" onClick={createHandler}>
        <FaPlus className="icon" />
      </button>
      <button className="edit" onClick={editHandler}>
        <FaPencilAlt className={`icon ${!highlight && "disabled"}`} />
      </button>
      <button className="delete" onClick={deleteHandler}>
        <FaTrash className={`icon ${!highlight && "disabled"}`} />
      </button>
    </div>
  );
}
