import { Routes } from "react-router-dom";
import { Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Profile from "./Pages/Profile";
import Basket from "./Pages/Basket";
import Categories from "./Pages/Categories";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Commands from "./Pages/Commands";

function App() {
  return (
    // Faire le Routing Ici 
    <Router>
      <Routes>

        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/Error" element={<ErrorPage/>}/>

        <Route path="/" element={<Home/>}/>

        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Explore/:Categorie" element={<Explore/>}/>

        <Route path="/Categories" element={<Categories/>}/>

        <Route path="/Products" element={<Products/>}/>
        <Route path="/Products/:id" element={<Product/>}/>

        <Route path="/Profile/:id" element={<Profile/>}/>

        <Route path="/Basket/:Userid" element={<Basket/>}/>

        <Route path="/About" element={<About/>}/>

        <Route path="/Commands/:Userid" element={<Commands/>}/>

      </Routes>
    </Router>
  )
}

export default App;
