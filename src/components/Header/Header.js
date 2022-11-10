import "./Header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function header() {
  return (
    <div>
      <Container className="header">
        <Navbar>
          <Container>
            <Navbar.Brand href="#">Login</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
}

export default header;

/* ------------------------------ EJEMPLOS DE CLASE 11/10 Y 13/10  ------------------------------- */

/* import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav> Hola soy el Header</nav>
        </header>
    );
}

export default Header; */
