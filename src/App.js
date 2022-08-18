import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarWithLogo from './components/Navbar';
import PhotoCarousel from './components/PhotoCarousel';
import VideoSection from './components/VideoSection/VideoSection';

function App() {
  return (
    <div>
      <NavbarWithLogo />
      <PhotoCarousel />
      <VideoSection />
    </div>
  );
}

export default App;
