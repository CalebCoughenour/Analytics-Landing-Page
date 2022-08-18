import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Homepage/Home';
import { Navbar } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
