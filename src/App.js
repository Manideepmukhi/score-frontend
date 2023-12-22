import logo from './logo.svg';
import './App.css';
import Allmatch from './Allmatch.js';
import Header from './Header.js';
import Livematch from './Livematch.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Allmatch" element={<Allmatch />} />
          <Route path="/" element={<Livematch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
