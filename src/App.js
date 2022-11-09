import './App.css';

/*  PRIMER EJEMPLO: estructura base

function App() {
  return (
    <div> 
      Hola Mundo
    </div>
  );
}

export default App; */


/* SEGUNDO EJEMPLO: le agregamos un h1 */

function App() {
  let name = "Mate Amargo"                  
  return (
    <div className="body">
      Hola Mundo
      <h1>{name}</h1>
    </div>
  );
}

export default App;
