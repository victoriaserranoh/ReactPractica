import "./CardComponent.css";
import { Button, Card } from "react-bootstrap";

/* para hacer que cada card sea diferente se las pasa por paramtros. En esos parametros pongo lo que quiero que reciba la card, 
Ej: titulo, descripcion. Y se los pasa entre llaves dentro de los parentesis de la funcion
EJEMPLO de una forma: function CardComponent({image, title, description})
EJEMPLO de otra forma: function CardComponent(props)... y despues ponemos en los de abajo {props.image} {props.title} etc*/

function CardComponent(props) {
  return (
    <div>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">Button</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CardComponent;


