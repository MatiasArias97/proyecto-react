import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; // Opcional

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda de camisetas de fútbol retro!" />
    </div>
  );
}

export default App;