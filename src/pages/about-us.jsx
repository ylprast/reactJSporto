import Footer from "../components/footer"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoToImage from '../img/goto.png';

function AboutUsPage() {

    return (
        <div className="container">
            <div className="col-lg-12 col-12 text-center">
              <h2 className="mb-lg-2 mb-4 about-title">Tukupedia adalah perusahaan teknologi Indonesia dengan misi mencapai </h2><span className="about-subtitle">pemerataan ekonomi secara digital.</span>
          </div>
          <Container>
      <Row>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">99%</span>
        <span className="subvalue">Kota terjangkau</span>
        </Col>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">40±</span> 
        <span className="subvalue">Produk digital</span></Col>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">1.8miliar</span> 
        <span className="subvalue">Produk terdaftar di platform</span></Col>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">86.5%</span> 
        <span className="subvalue">Penjual adalah pebisnis baru</span></Col>
      </Row>
      <Row>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">14+ jt</span>
        <span className="subvalue">Penjual terdaftar</span>
        </Col>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">60%</span> 
        <span className="subvalue">Pesanan terkirim paling lambat di keesokan harinya</span>
        </Col>
        <Col style={{flexDirection: 'column', display: 'flex'}}>
        <span className="value">2.5x</span> 
        <span className="subvalue">Peningkatan UMKM dipimpin oleh perempuan selama pandemi</span>
        </Col>
      </Row>
    </Container>
    <section>
        <div className="about-section">
            <div className="about-section2">
          <div className="col-lg-6 col-12 me-auto mb-4 mb-lg-0" style={{paddingTop: '50px'}}>

              <h1><strong>Perjalanan Baru Dalam Mendorong Perubahan Bersama GoTo</strong></h1><p>Semangat gotong royong membawa Tukupedia dan Gojek, dua perusahaan anak bangsa, untuk bersatu dalam menciptakan ekosistem menyeluruh.</p>
              <button className="btn custom-btn" ><a href="https://www.gotocompany.com/" target="_blank" rel="noopener noreferrer">Pelajari Selengkapnya</a></button>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-1 mb-md-0">
      <div className="member-block">
        <div className="member-block-image-wrap">
          <img src={GoToImage} className="member-block-image img-fluid" alt="GoTo" />
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
            <Footer/>
        </div>

    )
}


export default AboutUsPage