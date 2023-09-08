
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './pages/About';
import AllProject from './pages/AllProject';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
// import {BrowserRouter as Router , Routes, Route , Switch} from "react-router-dom"

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <div className="home">
          <Hero/>
          <About/>
          <Project/>
          <Contact/>
            
            {/* <Route path="/moreprojects" element={<AllProject/>} /> */}
            
          
        </div>
      </div>
    </>
  );
}

export default App;
