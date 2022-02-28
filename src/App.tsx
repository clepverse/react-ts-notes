import Actions from "./components/Actions";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Notes from "./components/Notes";
import NotesArea from "./components/NotesArea";
import HightlightProvider from "./context/HightlightContext";

function App() {
  return (
    <HightlightProvider>
      <Header>
        <Logo />
        <Actions />
      </Header>
      <NotesArea>
        <Notes />
      </NotesArea>
    </HightlightProvider>
  );
}

export default App;
