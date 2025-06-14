import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './app.css';
import  ThemeProvider  from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  )
}

export default App

