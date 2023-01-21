import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import flexLogo from '../img/Flexboard_icon.png';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" className='logo'>
            <img
              alt=""
              src={flexLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Flexboard
          </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default Navigation;
