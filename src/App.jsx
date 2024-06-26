import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/Dashboard";
import DashboardMessages from "./pages/DashboardMessages";
import DashboardTasks from "./pages/DashboardTasks";
import EffetSample from "./api/EffetSample";
import PostSample from "./api/PostSample";
import AxiosGetSample from "./api/AxiosGetSample";
import AxiosMultiCall from "./api/AxiosMultiCall";
import Intro from "./muiSample/Intro";
import GridLayout from "./muiSample/GridLayout";
import ProductsDataGrid from "./muiSample/ProductsDataGrid";
import AddCategoryForm from "./fomrSample/AddCategoryForm";
import AddProductForm from "./fomrSample/AddProductForm";
import ReactQueryIntro from "./react-query-sample/ReactQueryIntro";
import ProductsTable from "./pages/ProductsTable";
import Cart from "./pages/Cart";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function App() {

  const { cart } = useContext(CartContext)


  return (<>
    <h3>Site Header</h3>
    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/react-query'>React Query</Link></li>
      <li><Link to='/productstable'>Products Table</Link></li>
      <li><Link to='/cart'>Cart <span style={{color:'red'}}>({cart.length})</span></Link></li>
    </ul>
    <hr />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/:id/:subid" element={<ProductDetail />} />
      <Route path="/react-query" element={<ReactQueryIntro />} />
      <Route path="/productstable" element={<ProductsTable />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          path="messages"
          element={<DashboardMessages />}
        />
        <Route path="tasks" element={<DashboardTasks />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <h3>Site Footer</h3>
  </>)
}

export default App;
