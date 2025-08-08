
import FormularioRegistro from './components/FormularioRegistro';
import { InscripcionProvider } from './context/InscripcionContext';
import './App.css';

function App() {
  return (
    <InscripcionProvider>
      <div className="App">
        <FormularioRegistro />
      </div>
    </InscripcionProvider>
  );
}

export default App;