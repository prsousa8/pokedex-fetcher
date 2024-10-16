import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default AppRoutes;
