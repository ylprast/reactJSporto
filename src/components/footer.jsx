import { useState } from "react";
import logoPath from '../img/logo.png'
import '../App.css'

function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateForm = () => {
      let emailValid = validateEmail(email);
      let phoneValid = validatePhone(phone);

      if (emailValid && phoneValid) {
          alert("Thank you for your feedback!^^");
      }
  };

  const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
          setEmailError("Email tidak boleh kosong.");
          return false;
      } else if (!emailPattern.test(email)) {
          setEmailError("Format email tidak valid.");
          return false;
      } else {
          setEmailError("");
          return true;
      }
  };

  const validatePhone = (phone) => {
      if (!phone) {
          setPhoneError("Nomor telepon tidak boleh kosong.");
          return false;
      } else if (!/^\d{12,}$/.test(phone)) {
          setPhoneError("Nomor telepon harus minimal 12 angka.");
          return false;
      } else {
          setPhoneError("");
          return true;
      }
  };
  
  
    return (
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-6 col-12 me-auto mb-5 mb-lg-0">
              <a className="navbar-brand d-flex align-items-center">
                <img src={logoPath} className="navbar-brand-image img-fluid" alt="" />
                <span className="navbar-brand-text">
                  Tukupedia
                </span>
              </a>
            </div>
  
            <div className="col-lg-5 col-12">
              <h5 className="site-footer-title mb-4">Give us your honest review!</h5>
              <form id="contactForm" onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
                <div className="mb-3">
                <input className="form-control"
                    type="text" 
                    id="email" 
                    placeholder="user@mail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="error">{emailError}</div>
                </div>
                <div className="mb-3">
                <input className="form-control"
                    type="text" 
                    id="phone" 
                    placeholder="08123456789" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className="error">{phoneError}</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="textarea" className="form-label">Type your review here</label>
                  <textarea className="form-control" id="textarea" rows="3"></textarea>
                </div>
                <button type="button" onClick={validateForm} className="btn custom-btn" data-bs-toggle="tooltip" data-bs-placement="right"
                  data-bs-custom-class="custom-tooltip" data-bs-title="Click me!">Submit</button>
                <p className="copyright-text">Copyright © 2024 www.tukupedia.com</p>
              </form>
            </div>
  
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#81B29A" fillOpacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </footer>
    );
  }
  
  export default Footer;
  