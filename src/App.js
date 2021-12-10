import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Result from './pages/Result';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/main" element={<Main  />}/>
        <Route path="/result" element={<Result/>}/>
      </Routes>
    </Router>
  );
}

export default App;
