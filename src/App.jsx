import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (<>
    <h3>Site Header</h3>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/products'>Products</Link></li>
    </ul>
    <hr />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage/>} />
      <Route path="/products/:id" element={<ProductDetail/>} />
      <Route path="/products/:id/:subid" element={<ProductDetail/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <h3>Site Footer</h3>
  </>)
}

export default App;
