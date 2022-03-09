import { ToastContainer } from "react-toastify";
import Actions from "./components/Actions";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Notes from "./components/Notes";
import NotesArea from "./components/NotesArea";
import HighlightProvider from "./context/HighlightContext";
import NoteFormProvider from "./context/NoteFormContext";
import NoteListProvider from "./context/NoteListContext";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <NoteFormProvider>
      <NoteListProvider>
        <HighlightProvider>
          <Header>
            <Logo />
            <Actions />
          </Header>
          <NotesArea>
            <Notes />
          </NotesArea>
          <ToastContainer />
        </HighlightProvider>
      </NoteListProvider>
    </NoteFormProvider>
  );
}

export default App;
