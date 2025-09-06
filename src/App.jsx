import "./styles/App.scss";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { Certificates } from "./Components/Certificates/Certificates";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Background } from "./Components/Background/Background";

export function App() {

  return (
    <div className="App">

      <Navbar />

      <Header />

      <Projects />

      <Experience />

      <Certificates />

      <About />

      <Contact />

      <Background />

    </div>
  );
}
