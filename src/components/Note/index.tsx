import React from "react";
import { useNoteForm } from "../../context/NoteFormContext";

import "./styles.scss";

interface HighlightProps {
  highlight: boolean;
  setHighlight: (highlight: boolean) => void;
}

interface NoteListProps {
  id: number | string;
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
  const { visibleForm, setVisibleForm } = useNoteForm();
  return (
    <div
      className={`note ${highlight && "hightlight"}`}
      onClick={() => {
        if (highlight) {
          setVisibleForm(true);
        }
        setHighlight(!highlight);
      }}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  );
}
