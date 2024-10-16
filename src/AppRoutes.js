import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Pokemons from "./pages/Pokemons";
import About from "./pages/About";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemons" element={<Pokemons />} />
          <Route path="/sobre" element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default AppRoutes;
