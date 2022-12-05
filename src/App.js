import React from 'react';
import './App.css';
import { Container, Navbar} from 'reactstrap';
import GamesList from './features/games/GamesList';



function App() {
  return (
    <div className="App">
        <Navbar dark sticky='top' expand='md'>
        </Navbar>
        <GamesList />
    </div>
  );
}

export default App;
