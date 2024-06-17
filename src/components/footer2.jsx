
import logoPath from '../img/logo.png'
import '../App.css'

function Footer2() {

    return (
      <footer className="site-footer" id="footer">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-6 col-12 me-auto mb-5 mb-lg-0">
              <a className="navbar-brand d-flex align-items-center" href="prakerja.html">
                <img src={logoPath} className="navbar-brand-image img-fluid" alt="" />
                <span className="navbar-brand-text">
                  Tukupedia
                </span>
              </a>
            </div>
  
                <p className="copyright-text">Copyright © 2024 www.tukupedia.com</p>

            </div>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#81B29A" fillOpacity="1" d="M0,224L34.3,192C68.6,160,137,96,206,90.7C274.3,85,343,139,411,144C480,149,549,107,617,122.7C685.7,139,754,213,823,240C891.4,267,960,245,1029,224C1097.1,203,1166,181,1234,160C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </footer>
    );
  }
  
  export default Footer2;
  