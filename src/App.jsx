
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import HomePage from "./pages/home"
import KeranjangPage from "./pages/keranjang"
import ProductPage from "./pages/product"
import AboutUsPage from "./pages/about-us"
import './App.css'

function App() {

  return (
    <>
<BrowserRouter>
      <div>
        <h1>Router Navigate</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/keranjang">Your Order</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<KeranjangPage />} />
          <Route path='/about-us' element={<AboutUsPage />}></Route>
          <Route path='/product-detail' element={<ProductPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
