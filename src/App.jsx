import "./App.css";
import { About } from "./components/About/About";
import { Me } from "./components/Me/Me";
import { NavBar } from "./components/NavBar/NavBar";
import { ProjectsList } from "./components/Proyects/ProjectsList";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Me />
      <ProjectsList />
      <Skills />
      <About />
    </div>
  );
}

export default App;
