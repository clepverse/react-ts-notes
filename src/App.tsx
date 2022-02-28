import Actions from "./components/Actions";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Notes from "./components/Notes";
import NotesArea from "./components/NotesArea";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <Actions />
      </Header>
      <NotesArea>
        <Notes />
      </NotesArea>
    </div>
  );
}

export default App;
