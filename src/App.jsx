import './App.css';
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom";
import MoviePage from "./Pages/MoviePage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/:movie" element={<MoviePage />} />
      </Routes>
  );
}

export default App;
