import './App.css';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviePage from './Pages/MoviePage';
import { MovieProvider } from './MovieContextProvider';

function App() {
    return (
        <MovieProvider>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/:movieId" element={<MoviePage />}/>
                </Routes>
            </Router>
        </MovieProvider>
    );
}

export default App;
