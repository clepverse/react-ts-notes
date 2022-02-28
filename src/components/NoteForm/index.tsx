import React from "react";
import { FaBan, FaCheck } from "react-icons/fa";

import "./styles.scss";

export default function NoteForm() {
  return (
    <form className="note-menu">
      <div>
        <label htmlFor="title">Titulo</label>
        <input id="title" type="text" placeholder="Informe um titulo" />
      </div>
      <div>
        <label htmlFor="note">Nota</label>
        <textarea id="note" rows={3} placeholder="Escreva a sua nota" />
      </div>
      <div className="buttons">
        <button type="button" className="cancel">
          <FaBan className="icon" />
        </button>
        <button type="submit" className="confirm">
          <FaCheck className="icon" />
        </button>
      </div>
    </form>
  );
}
