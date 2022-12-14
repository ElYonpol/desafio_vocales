import Form from "./Form/Form"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fomularios prueba</h1>
        <Form text="No ingresar vocales: " notAllowed="aeiou" />
        <Form text="No ingresar números: " notAllowed="01234567890" />
      </header>
    </div>
  );
}

export default App;
