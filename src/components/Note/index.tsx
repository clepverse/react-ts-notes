import React from "react";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.scss";

interface HighlightProps {
  highlight: boolean;
  setHighlight: (highlight: boolean) => void;
}

interface NoteListProps {
  id: string;
  title: string;
  description: string;
}

export default function Note({
  id,
  title,
  description,
  highlight,
  setHighlight,
}: NoteListProps & HighlightProps) {
  const { setVisibleForm } = useNoteForm();

  return (
    <div
      id={id}
      className={`note ${highlight === eval(id) && "highlight"}`}
      onClick={() => {
        if (highlight === eval(id)) {
          setHighlight(false);
          setVisibleForm(false);
        } else {
          setHighlight(eval(id));
          setVisibleForm(true);
        }
      }}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
      {highlight === eval(id) ? (
        <span className="select-edit">Selecionado</span>
      ) : (
        <span className="select-edit">Selecione para Editar</span>
      )}
    </div>
  );
}
