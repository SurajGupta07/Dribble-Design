import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from "../src/components/Header"
import Footer from "./components/Footer/Footer"
 
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
