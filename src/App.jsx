import styles from "./App.module.css";
import { Opening } from "./components/Opening/Opening";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact";


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Opening />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
