import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "../src/components/Header"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Home />
    </div>
  );
}

export default App;
