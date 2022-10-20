import './App.css';
import News from './components/News';
import Headlines from './components/Headlines';
import About from './components/About';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [partochild, setpartochild] = useState("");

  function getInputValue(val) {
    console.log(val);
    setpartochild(val);
  }

  return (
    <>
    <Navbar getFun={getInputValue}/>
      <Routes>
        <Route path="/" element={<News part={partochild} />}/>
        <Route path="/headlines" element={<Headlines />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;