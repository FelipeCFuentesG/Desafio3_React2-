import './style.css'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonSelect from './components/PokemonSelect';
import InformacionPokemon from './components/InformacionPokemon';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon' element={<PokemonSelect/>}/>
        <Route path='/pokemon/:name' element={<InformacionPokemon/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
