import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Features from './Components/Features'; 
import Screenshot from './Components/Screenshot';
import Client from './Components/Client';
import Pricing from './Components/Pricing';
import Download from './Download';

function App() {
  return (
    <div>
      <Navbar />

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/features">Features</Link> |{" "}
        <Link to="/screenshot">Screenshot</Link> |{" "}
        <Link to="/client">Client</Link> |{" "}
        <Link to="/pricing">Pricing</Link> |{" "}
        <Link to="/download">Download</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} /> 
        <Route path="/screenshot" element={<Screenshot />} />
        <Route path="/client" element={<Client />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
}

export default App;
