import './App.css';
import {Routes, Route} from 'react-router-dom';
import GamesDirectoryPage from './pages/GamesDirectoryPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='directory' element={<GamesDirectoryPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
