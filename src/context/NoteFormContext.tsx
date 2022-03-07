import React, { useState, useContext, createContext, ReactNode } from "react";

interface NoteFormContextProps {
  children: ReactNode;
}

const initialValue = {
  visibleForm: false,
  title: "",
  description: "",
  setTitle: () => {},
  setVisibleForm: () => {},
  setDescription: () => {},
};

interface NoteFormContextType {
  visibleForm: boolean;
  title: string;
  description: string;
  setVisibleForm: (newState: boolean) => void;
  setTitle: (newState: string) => void;
  setDescription: (newState: string) => void;
}

const NoteFormContext = createContext<NoteFormContextType>(initialValue);

export default function NoteFormProvider({ children }: NoteFormContextProps) {
  const [visibleForm, setVisibleForm] = useState(initialValue.visibleForm);
  const [title, setTitle] = useState(initialValue.title);
  const [description, setDescription] = useState(initialValue.description);

  return (
    <NoteFormContext.Provider
      value={{
        visibleForm,
        setVisibleForm,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {children}
    </NoteFormContext.Provider>
  );
}

export function useNoteForm() {
  const context = useContext(NoteFormContext);

  const {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  } = context;

  if (!context) {
    throw new Error("useNoteForm deve ser usado em um NoteFormProvider");
  }

  return {
    visibleForm,
    setVisibleForm,
    title,
    setTitle,
    description,
    setDescription,
  };
}
