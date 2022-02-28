import React, { useState, useContext, createContext } from "react";

interface NoteListContextProps {
  children: React.ReactNode;
}

const valueInitial = {
  noteList: [],
  setNoteList: () => {},
};

interface NoteListContextType {
  noteList: unknown[];
  setNoteList: (newNoteList: []) => void;
}

const NoteListContext = createContext<NoteListContextType>(valueInitial);

export default function NoteListProvider({ children }: NoteListContextProps) {
  const [noteList, setNoteList] = useState(valueInitial.noteList);

  return (
    <NoteListContext.Provider
      value={{
        noteList,
        setNoteList,
      }}
    >
      {children}
    </NoteListContext.Provider>
  );
}

export function useNoteList() {
  const context = useContext(NoteListContext);

  const { noteList, setNoteList } = context;

  if (!context) {
    throw new Error("useNoteList deve ser usado em um NoteListProvider");
  }

  return { noteList, setNoteList };
}
