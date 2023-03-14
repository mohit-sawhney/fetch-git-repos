import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Branches from './components/Branches';
import Homepage from './components/Homepage';
import ReposContainer from './components/ReposContainer';

function App() {

  return (
    <div className="App">
      <nav className='navbar'>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/repos" element={<ReposContainer />} />
          <Route exact path="/branches/:id" element={<Branches />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
