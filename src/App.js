import './App.css';
import {Routes, Route} from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import Footer from './components/footer/Footer';
import GamesDirectoryPage from './pages/GamesDirectoryPage';
import GameDetailPage from './pages/GameDetailPage';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='directory' element={<GamesDirectoryPage />} />
            <Route path='directory/:gameId' element={<GameDetailPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
