import React from "react";
import { FaPlus } from "react-icons/fa";

import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.scss";

export default function Actions() {
  const { visibleForm, setVisibleForm, setTitle, setDescription } =
    useNoteForm();
  const { highlight, setHighlight } = useHighlight();

  const createHandler = (): void => {
    if (visibleForm && highlight) {
      setTitle("");
      setDescription("");
      setHighlight(false);
    } else {
      setVisibleForm(!visibleForm);
    }
  };

  return (
    <div className="actions">
      <button className="create" onClick={createHandler}>
        <FaPlus className="icon" />
      </button>
    </div>
  );
}
