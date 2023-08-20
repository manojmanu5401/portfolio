import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import ScrollUp from './components/ScrollUp';
import Services from './components/Services';

function App() {
  return (
    <>
    <NavBar/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
