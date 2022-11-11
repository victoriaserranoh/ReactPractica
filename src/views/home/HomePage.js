/* ---------------------------- EJEMPLOS DE CLASE 20/10 ------------------------- */
import "./HomePage.css";
import CardComponent from "../../componentes/card/CardComponent"

function HomePage() {
  return (
    <div className="body">
      <CardComponent image={"https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"} title={"Hola 1"} description={"Hola soy una descripcion"}/>
      <CardComponent image={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} title={"Hola 2"} description={"Hola soy una nula"}/>
      <CardComponent image={"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320"} title={"Hola 3"} description={"Hola soy una tortilla"}/>
    </div>
  );
}
export default HomePage; 

/* ------------------------------ AXIOS ejemplo con funcion asyncrona 20/10 ------------------------
import axios from "axios";

function HomePage() {
  const AxiosPeticion = async () => {
    let response = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(response)
  }
  AxiosPeticion()


  return (
    <div>Hola mundo</div>
  );
}

export default HomePage; */


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
