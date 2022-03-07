import React, { ReactNode } from "react";
import { useNoteForm } from "../../context/NoteFormContext";
import NoteForm from "../NoteForm";
import "./styles.scss";

interface ChildrenProps {
  children: ReactNode;
}

export default function NotesArea({ children }: ChildrenProps) {
  const { visibleForm } = useNoteForm();
  return (
    <article className="notes-area">
      {children}
      {visibleForm && <NoteForm />}
    </article>
  );
}
