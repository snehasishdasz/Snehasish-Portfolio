
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './pages/About';
import AllProject from './pages/AllProject';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import {BrowserRouter as Router , Routes, Route , Switch} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="home">
                  <Hero />
                  <About />
                  <Project />
                  <Contact />
                </div>
              }
            />
            <Route path="/moreprojects" element={<AllProject />} />
          </Routes>
        </Router>
      </div>

    
      {/* <div className='App'>
        <Navbar/>
        <div className="home">
          <Hero/>
          <About/>
          <Project/>
          <Contact/>
        </div>
      </div> */}
    </>
  );
}

export default App;
