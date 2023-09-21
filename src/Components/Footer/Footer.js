import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import melologo from '../../images/melogo12.png';
import facebook from '../../images/fb1.png';
import inster from '../../images/inster.png';
import whatsapp from '../../images/whatsapp.png';
import twitter from '../../images/twitter.png';
import linkdin from '../../images/linkdin.png';
import envelope from '../../images/envelope.png';
import arrow from '../../images/arrow.png';
import musnot from '../../images/musnote.png';


function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <img src={melologo} alt="Melor Logo" className="logo" />
            <p>Join with us to enjoy and learn the music in one place</p>
            <p><img id="musnot" src={musnot}/></p>
          </Col>
          <Col>
            <h3>
              Web <div className="underline"><span></span></div>
            </h3>
            <p>Songs</p>
            <p>Lyrics</p>
            <p>Melodies</p>
            <p className="email-id">melorcraft@gmail.com</p>
            <h5>737999879</h5>
          </Col>
          <Col>
            <h3>
              Links <div className="underline"><span></span></div>
            </h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/songs">Songs</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>
          <Col>
            <h3>
              Feedbacks <div className="underline"><span></span></div>
            </h3>
            <form>
              <i className="fas fa-envelope"><img id="enlop" src={envelope}/></i>
              <input type="email" placeholder="Enter a feedback" required />
              <button type="submit"><i className="fas fa-arrow-right"><img id="arro" src={arrow}/></i></button>
            </form>
            <div className="Social-icons">
                        <i ><img src={facebook} alt="Melor Logo" className="logo" id="flog1" /></i>
                        <i><img src={inster} alt="Melor Logo" className="logo"  id="flog2"/></i>
                        <i><img src={whatsapp} alt="Melor Logo" className="logo" id="flog3"/></i>
                        <i><img src={twitter} alt="Melor Logo" className="logo" id="flog4"/></i>
                        <i><img src={linkdin} alt="Melor Logo" className="logo" id="flog5"/></i>
            </div>
          </Col>
        </Row>
        <hr />
        <div className="copyright">
          <h5>Melorcraft @ 2023 All-Right-Reserved</h5>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
