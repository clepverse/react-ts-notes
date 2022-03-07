import React, { ChangeEvent, FormEvent, useState } from "react";
import { FaBan, FaCheck } from "react-icons/fa";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";

import "./styles.scss";

export default function NoteForm() {
  const { noteList, setNoteList } = useNoteList();
  const { title, setTitle, description, setDescription } = useNoteForm();

  const titleHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const descriptionHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setDescription(event.target.value);
  };

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    setNoteList([
      ...noteList,
      {
        id: String(Math.floor(Math.random() * 1000)),
        title,
        description,
      },
    ]);
  };

  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Titulo</label>
        <input
          id="title"
          value={title}
          onChange={titleHandler}
          type="text"
          placeholder="Informe um titulo"
        />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea
          id="note"
          value={description}
          onChange={descriptionHandler}
          rows={3}
          placeholder="Escreva a sua nota"
        />
      </div>
      <div className="buttons">
        <button type="button" className="cancel">
          <FaBan className="icon" />
        </button>
        <button type="submit" onClick={submitHandler} className="confirm">
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
