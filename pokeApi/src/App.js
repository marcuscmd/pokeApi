import './App.css';
import { Button } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label='Poke API' color="blue" path={'/pokemon'}>
          Buscar Personagem
        </Button>
      </header>
    </div>
  );
}

export default App;
