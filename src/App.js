
import './App.css';
import Navbar from './components/Navbar';
import Project from './components/Project';
import About from './pages/About';
import Hero from './pages/Hero';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <div className="home">
          <Hero/>
          <About/>
          <Project/>
        </div>
      </div>
    </>
  );
}

export default App;
