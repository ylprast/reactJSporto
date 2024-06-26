
import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/home.jsx"
import FAQPage from "./pages/faq.jsx"
import ProductPage from "./pages/product.jsx"
import AboutUsPage from "./pages/about-us.jsx"
import RegisterPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
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
        <Nav.Link href="/faq" element={<FAQPage />} >FAQ</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about-us" element={<AboutUsPage />}>About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/product" element={<ProductPage />}>Product</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/register" element={<RegisterPage />}>Register</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login" element={<LoginPage />}>Login</Nav.Link>
      </Nav.Item>
    </Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/faq' element={<FAQPage />}></Route>
          <Route path='/about-us' element={<AboutUsPage />}></Route>
          <Route path='/product' element={<ProductPage />}></Route>
          <Route path='/register' element={<RegisterPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route> 
        </Routes>
      </div>
    </BrowserRouter>
    </nav>
    </>
  )
}


export default App
