
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/home"
import FAQPage from "./pages/faq"
import ProductPage from "./pages/product"
import AboutUsPage from "./pages/about-us"
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';



function App() {

  return (
    <>
    <nav className="navbar" >
<BrowserRouter>
      <div className="container navbar-nav  ms-lg-auto">
        <Nav fill variant="tabs" defaultActiveKey=" ">
      <Nav.Item>
        <Nav.Link href="/" element={<HomePage />}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./pages/faq" element={<FAQPage />} >FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./pages/about-us" element={<AboutUsPage />}>About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./pages/product-detail" element={<ProductPage />}>Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./pages/register" element={<RegisterPage />}>Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="./pages/login" element={<LoginPage />}>Login</Nav.Link>
      </Nav.Item>
    </Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="./pages/faq" element={<FAQPage />} />
          <Route path="./pages/about-us" element={<AboutUsPage />}></Route>
          <Route path="./pages/product-detail" element={<ProductPage />}></Route>
          <Route path="./pages/register" element={<RegisterPage />} />
          <Route path="./pages/login" element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    </nav>
    </>
  )
}


export default App
