import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from "../src/components/Header"
import Hotjar from "../src/components/Hotjar"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Hotjar />
    </div>
  );
}

export default App;
