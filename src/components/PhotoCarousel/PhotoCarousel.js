import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';

function PhotoCarousel() {
  return (
    <Carousel className='carousel-wrapper' styled={{ backgroundColor: "#35a1ca"}}>
      <Carousel.Item interval={2000}>
        <img
          className='carousel-image'
          src="https://images.pexels.com/photos/590044/pexels-photo-590044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption style={{ 
                color: 'black',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
          <h1>First slide label</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='carousel-image'
          src="https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=650&dpr=1"
          alt="Second slide"
        />
        <Carousel.Caption style={{ 
                color: '#fff',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
          <h1>Second slide label</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='carousel-image'
          src="https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
        <Carousel.Caption interval={2000} style={{ 
                color: 'black',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
          <h1>Third slide label</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='carousel-image'
          src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fourth slide"
        />
        <Carousel.Caption interval={2000} style={{ 
                color: '#000000',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
          <h1>Forth slide label</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default PhotoCarousel;