import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Homepage/Home';
import { Navbar } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './globalStyles';

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
