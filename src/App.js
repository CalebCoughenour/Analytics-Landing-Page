import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Homepage/Home';
import { Navbar, BackToTopButton } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </Router>
    </>
  );
}

export default App;
