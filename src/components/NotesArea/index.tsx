import React from "react";
import NoteForm from "../NoteForm";
import "./styles.scss";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function NotesArea({ children }: ChildrenProps) {
  return (
    <article className="notes-area">
      {children}
      <NoteForm />
    </article>
  );
}
