import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Menu from "./components/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
