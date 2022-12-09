import './App.css';
import GamesDirectoryPage from './pages/GamesDirectoryPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Header />
        <GamesDirectoryPage />
        <Footer />
    </div>
  );
}

export default App;
