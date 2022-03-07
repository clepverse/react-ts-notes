import React, { useState, useContext, createContext, ReactNode } from "react";

interface NoteListProviderProps {
  children: ReactNode;
}

interface NoteList {
  id: string;
  title: string;
  description: string;
}
interface NoteListType {
  noteList: NoteList[];
  setNoteList: (newState: NoteList[]) => void;
}

const NoteListContext = createContext<NoteListType>({} as NoteListType);

export default function NoteListProvider({ children }: NoteListProviderProps) {
  const [noteList, setNoteList] = useState<NoteList[]>([]);

  return (
    <NoteListContext.Provider value={{ noteList, setNoteList }}>
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
