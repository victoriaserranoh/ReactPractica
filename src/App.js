import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./views/home/HomePage"

function App() {
  return(
    <div>
      <HomePage/>
    </div>
  );
}
export default App;




/* ------------------------------ EJEMPLOS DE CLASE 11/10 Y 13/10  ------------------------------- */

/* TERCER EJEMPLO: homepage 

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./views/home/HomePage"

function App() {
  return(
    <div>
      <HomePage/>
    </div>
  );
}
export default App;

*/


/* SEGUNDO EJEMPLO: le agregamos un h1 */

/* Cuando no tenia creada todavia la HomePage
import Header from "./components/Header/Header"; 
import Footer from "./components/Footer/Footer";

function App() {
  let name = "Mate Amargo";
  return (
    <div>
      <Header />        
      <div className="body">
        <h1>{name}</h1>
      </div>
      <Footer />
    </div>
  );
}
export default App; */


/*  PRIMER EJEMPLO: estructura base

function App() {
  return (
    <div> 
      Hola Mundo
    </div>
  );
}

export default App; */
