import React from "react";

import "./styles.scss";

interface HighlightProps {
  highlight: boolean;
  setHighlight: (highlight: boolean) => void;
}

interface NoteListProps {
  id: number;
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
  return (
    <div
      className={`note ${highlight && "hightlight"}`}
      onClick={() => setHighlight(!highlight)}
    >
      <h2 className="title">{title}</h2>
      <hr />
      <p className="note-description">{description}</p>
    </div>
  );
}
