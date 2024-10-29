import NavBar from './components/navbar';
import ItemListContainer from './components/itemListContainer';
import './App.css'; // Opcional

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda de R18!" />
    </div>
  );
}

export default App;