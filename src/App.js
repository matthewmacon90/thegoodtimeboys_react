import './App.css';
import GamesList from './features/games/GamesList';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <GamesList />
        <Footer />
    </div>
  );
}

export default App;
