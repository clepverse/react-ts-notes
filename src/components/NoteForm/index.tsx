import React, { ChangeEvent, FormEvent, useEffect } from "react";
import { FaBan, FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { useHighlight } from "../../context/HighlightContext";
import { useNoteForm } from "../../context/NoteFormContext";
import { useNoteList } from "../../context/NoteListContext";
import "./styles.scss";

export default function NoteForm() {
  const { noteList, setNoteList } = useNoteList();
  const { highlight, setHighlight } = useHighlight();
  const {
    title,
    setTitle,
    description,
    visibleForm,
    setDescription,
    setVisibleForm,
  } = useNoteForm();

  useEffect(() => {
    saveLocalNotes();
  }, [noteList]);

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
    if (highlight) {
      noteList.map((note) => {
        if (eval(note.id) === highlight) {
          note.title = title;
          note.description = description;
          toast.success("Nota editada com sucesso!");
        }
      });
      setNoteList([...noteList]);
    } else {
      if (title && description) {
        setNoteList([
          ...noteList,
          {
            id: String(Math.floor(Math.random() * 1000)),
            title,
            description,
          },
        ]);
        toast.success("Nota criada com sucesso!");
        setHighlight(false);
        setTitle("");
        setDescription("");
      } else {
        toast.error("Preencha todos os campos!");
      }
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
      toast.success("Nota removida com sucesso!");
      setHighlight(false);
    }
  };

  const cancelHandler = (event: FormEvent): void => {
    event.preventDefault();

    setHighlight(false);
    setVisibleForm(false);
  };

  const saveLocalNotes = (): void => {
    localStorage.setItem("notes", JSON.stringify(noteList));
  };

  return (
    <Modal
      isOpen={visibleForm}
      onRequestClose={cancelHandler}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form className="note-menu">
        <div>
          <div className="title-button">
            <label htmlFor="title">Titulo</label>
            <button type="button" onClick={cancelHandler} className="cancel">
              <FaBan className="icon" />
            </button>
          </div>
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
          <button type="submit" onClick={submitHandler} className="confirm">
            {highlight ? (
              <FaPencilAlt className="icon" />
            ) : (
              <FaCheck className="icon" />
            )}
          </button>
          <button type="button" onClick={deleteHandler} className="cancel">
            {highlight && <FaTrash className="icon" />}
          </button>
        </div>
      </form>
    </Modal>
  );
}
