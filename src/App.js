import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound";
import DrinksList from "./Components/DrinksList/DrinksList";
import Drink from "./Components/Drink/Drink";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<DrinksList />} />
      <Route path="/drink/:drinkId" element={<Drink />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
