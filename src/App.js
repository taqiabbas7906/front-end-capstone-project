import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import Login from "./pages/Login";
import OrderOnline from "./pages/OrderOnline";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<AboutPage />} />
          <Route exact path="menu" element={<MenuPage />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="order" element={<OrderOnline />} />
          <Route exact path="reservation" element={<Reservation />} />
        </Routes>
        <div>{true}</div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
