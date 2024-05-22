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

function App() {


  return <AddCategoryForm/>

  return (<>
    <h3>Site Header</h3>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>

    </ul>
    <hr />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products/:id/:subid" element={<ProductDetail />} />

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
