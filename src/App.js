import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>hello</div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
