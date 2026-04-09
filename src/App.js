import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  console.log('last commit')
  console.log('last commit again')
  console.log('last commit final again')
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
