import { Container, Navbar } from 'react-bootstrap';

const src = "https://cdn.icon-icons.com/icons2/1370/PNG/512/if-weather-29-2682822_90802.png";

function NavbarWithLogo() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Half rainbow"
              src={src}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Analytics Data Center
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarWithLogo;