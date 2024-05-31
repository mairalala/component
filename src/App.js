import './App.css';
import { Third } from './Components/Third';
import { useState } from 'react';
import Fourth from './Components/Fourth';
import Second from './Components/Second';
import Child from './Components/Child';
import Firts from './Components/Firts';

function App() {

  const [name, setName] = useState("Lina");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None"
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <div>
          <hr />
          <Fourth />
          <hr />
        </div>
        <h2>Mensaje del hijo: </h2>
        <p>{ message }</p>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <Second/>
        <Third
          name="Laura"
          lastName="Ramirez"
          card={medicalRecord}
        />
        <Firts/>
      </header>
    </div>
  );
}

export default App;