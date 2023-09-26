import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Title from "./Components/Title";

function App() {
  return (
    <div className="App">
    
      <Router>
        <Navbar />
        
        <Routes>
          
          <Route path="#"   element={<Title/>}/>
          <Route path="/"   element={<Title/>}/>
          <Route path="/Cards" element={<Cards />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
