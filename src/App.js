
import './App.css';
import Navbar from"./components/navbar";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./components/about"; // Import your components for each route
import Projects from "./components/projects";
import Root from "./components/root";



function App() {
  return (



    <div className="App">
      <Router basename='/porfoliokd' >

      <Navbar/>

        <hr/>
        
      
      
      <Routes>
      <Route path="/porfoliokd" element={<Root />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
