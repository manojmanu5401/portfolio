import React, {useState} from  'react';
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
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
    <NavBar theme={darkTheme} setDarkTheme={setDarkTheme}/>
    <Home/>
    <About/>
    <Services/>
    <Project/>
    <Contact/>
    <Footer theme={darkTheme}/>
    <ScrollUp/>
    </>
  );
}

export default App;
