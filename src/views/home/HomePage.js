import "./HomePage.css";



import {Button, Nav, Modal} from "react-bootstrap";

function HomePage() {
    return(
    <div className="p-5 text-danger">
        <Button variant="btn btn-outline-primary"> Hola mundo </Button>   
    </div>
    );
}
export default HomePage;





/* ------------------------------ EJEMPLOS DE CLASE 11/10 Y 13/10  ------------------------------- */

/* EJEMPLO 3 
(importar componentes de react bootstrap, ejemplo: button)

import {useState} from "react";
import {Button, Modal} from "react-bootstrap";

function HomePage() {
(Estos actualizan el estado del modal, si esta abierto lo cierra y si esta cerrado lo abre)
    const [show, setShow] = useState(false);   
(Estas son dos funciones flechas de JS)  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return(
    <div>
        <Button variant="primary" onClick={handleShow}>
        BOTON DE MODAL
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> 
    </div>
    );
}
export default HomePage;
 */


/* EJEMPLO 2
import {Button, Nav, Modal} from "react-bootstrap";

function HomePage() {
    return(
    <div className="p-5 text-danger">
        <Button variant="btn btn-outline-primary"> Hola mundo </Button>   
    </div>
    );
}
export default HomePage;
*/


/* EJEMPLO 1
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    return(
    <div className="p-5 text-danger">
        <Header/>
        <h1>Hola mundo</h1>
        <Footer/>
    </div>
    );
}
export default HomePage;
*/