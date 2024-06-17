import { useState } from 'react';
import '../App.css';
import Footer2 from '../components/footer2';
import product from '../img/vivoy17s.jpg';
import product2 from '../img/zflip3.jpg';
import product3 from '../img/macbookair.jpg';
import product4 from '../img/lenolegion5.jpg';

function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} to cart`);
  };

  return (
    
    <div className="product-page">
    <section>
        <div className="about-section">
            <div className="about-section2">
          <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0" >

              <h1 className="product-name">Vivo Y17s</h1>
        <p className="product-description">
<ul>
<li>Warna: Glitter Purple, Forest Green</li>
<li>Peringkat Perlindungan: IP54 Dust & Water Resistance</li>
<li>Sistem Operasi: Funtouch OS 13 (Based on Android 13)</li>
<li>Prosesor: Mediatek Helio G85</li>
<li>RAM&ROM: 6GB + 6GB Extended RAM / 128GB ROM</li> 
<li>4GB + 4GB Extended RAM / 64GB ROM</li>
<li>Baterai: 5000mAh (TYP)</li>
</ul>
</p>
        <p className="product-price">Rp. 2.500.000</p>
<div className='mb-3'>
<label>
          Quantity:
          <input className='form-control'
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </label>
        </div>
              <button className="btn custom-btn" onClick={handleAddToCart} >Add to Cart</button>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
      <div className="member-block">
        <div className="member-block-image-wrap">
          <img src={product} className="member-block-image img-fluid" alt="product" />
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>

    <section>
        <div className="about-section">
            <div className="about-section2">
          
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
      <div className="member-block">
        <div className="member-block-image-wrap">
          <img src={product2} className="member-block-image img-fluid" alt="product" />
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0" >

              <h1 className="product-name">Samsung ZFlip 3</h1>
        <p className="product-description">

<ul>
<li>Memory UFS 3.1 Internal 128GB 8GB RAM, 256GB 8GB RAM</li>
<li>Resolution 1080 x 2640 pixels (~426 ppi density) Type HDR10, 1200 nits (peak), Foldable Dynamic AMOLED 2, 120H</li>
<li>Size 6.7 inche, 101.5 cm2 (~84.7% screen-to-body ratio)</li>
<li>Display 260 x 512 pixels, 1.9 inche, Cover display: Super AMOLED</li>
<li>RAM&ROM: 6GB + 6GB Extended RAM / 128GB ROM</li> 
<li>Fast charging 15W, Fast wireless charging 10W, Reverse wireless charging 4.5W</li>
<li>Type Li-Po 3300 mA, non-removable</li>
</ul>
</p>
        <p className="product-price">Rp. 15.999.000</p>
<div className='mb-3'>
<label>
          Quantity:
          <input className='form-control'
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </label>
        </div>
              <button className="btn custom-btn" onClick={handleAddToCart} >Add to Cart</button>
            </div>
    </div>
    </div>
    </section>
    <section>
        <div className="about-section">
            <div className="about-section2">
          <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0" >
          <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">

    </div>
              <h1 className="product-name">Macbook Air</h1>
        <p className="product-description">
<ul>
<li>Warna: Emas, Abu-abu, Perak</li>
<li>Layar: Layar Retina, Layar 13,3 inci (diagonal) dengan lampu latar LED dan teknologi IPS; resolusi 2560 x 1600 pada 227 piksel per inci dengan dukungan untuk jutaan warna
Skala resolusi yang didukung: 1680 x 1050, 1440 x 900, 1024 x 640, Aspek rasio 16:10</li>
<li>Touch ID: Sensor Touch ID</li>
<li>Prosesor: Intel Core i3 Dual-core 1,1 GHz, Turbo Boost hingga 3,2 GHz, dengan cache L3 sebesar 4 MB, Intel Core i5 Dual-core 1,1 GHz, Turbo Boost hingga 3,5 GHz, dengan cache L3 sebesar 6 MB</li>
<li>Penyimpanan: SSD berbasis PCIe 256 GB, SSD berbasis PCIe 512 GB</li> 
<li>Memori: Memori terpasang LPDDR4X 3733 MHz sebesar 8 GB</li>
<li>Baterai dan Daya: Web nirkabel hingga 11 jam, Pemutaran film aplikasi Apple TV hingga 12 jam, Waktu siaga hingga 30 hari, Baterai lithium-polymer bawaan 49,9 watt-jam, Adaptor Daya USB-C 30W; Port daya USB-C</li>
</ul>
</p>
        <p className="product-price">Rp. 11.000.000</p>
<div className='mb-3'>
<label>
          Quantity:
          <input className='form-control'
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </label>
        </div>
              <button className="btn custom-btn" onClick={handleAddToCart} >Add to Cart</button>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
      <div className="member-block">
        <div className="member-block-image-wrap">
          <img src={product3} className="member-block-image img-fluid" alt="product" />
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    <section>
        <div className="about-section">
            <div className="about-section2">
          
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
      <div className="member-block">
        <div className="member-block-image-wrap">
          <img src={product4} className="member-block-image img-fluid" alt="product" />
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0" >

              <h1 className="product-name">Lenovo Legion 5</h1>
        <p className="product-description">
<ul>
<li>VGA: 16GB (2x 8GB) DDR4, SSD: 512GB</li>
<li>VGA: NVIDIA GeForce RTX 3050 Ti 4GB</li>
<li>Konektivitas: Wifi + Bluetooth, Ukuran Layar: 15.6 inch FHD</li>
<li>Sistem Operasi: Windows 10 Home + Microsoft Office Home Student 2019</li>
<li>Lenovo Legion 5 15ACH6</li> 
<li>Variant : LENOVO Legion 5 15ACH6 [82JW003QID] - Phantom Blue, Free Product : LENOVO BAG-BP Legion</li>
<li>Processor: AMD Ryzen 7 5800H</li>
</ul>
</p>
        <p className="product-price">Rp. 18.500.000</p>
<div className='mb-3'>
<label>
          Quantity:
          <input className='form-control'
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="10"
          />
        </label>
        </div>
              <button className="btn custom-btn" onClick={handleAddToCart} >Add to Cart</button>
            </div>
    </div>
    </div>
    </section>
      <Footer2/>
    </div>
  );
}

export default ProductPage;