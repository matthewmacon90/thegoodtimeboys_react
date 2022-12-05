import './App.css';
import { Container, Navbar} from 'reactstrap';
import GamesList from './features/games/GamesList';
import Header from './components/Header';
import Footer from './components/Footer';


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
