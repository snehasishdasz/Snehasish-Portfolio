
import './App.css';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar/>
        <div className="home">
          <Hero/>
        </div>
      </div>
    </>
  );
}

export default App;
