import React from "react";

import { FaPlus, FaPencilAlt, FaTrash } from "react-icons/fa";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.scss";

export default function Actions() {
  const { visibleForm, setVisibleForm } = useNoteForm();

  const createHandler = (): void => {
    if (visibleForm) {
      setVisibleForm(false);
    } else {
      setVisibleForm(true);
    }
  };

  return (
    <div className="actions">
      <button className="create" onClick={createHandler}>
        <FaPlus className="icon" />
      </button>
      <button className="edit">
        <FaPencilAlt className="icon disabled" />
      </button>
      <button className="delete">
        <FaTrash className="icon disabled" />
      </button>
    </div>
  );
}
