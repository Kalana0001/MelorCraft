import React, { useEffect } from 'react';
import './Home.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import hv4 from '../../videos/hvideo04.mp4';
import hv5 from '../../videos/hvideo05.mp4';
import hv6 from '../../videos/hvideo06.mp4';
import hmg11 from '../../images/b11.jpg';
import guitar from '../../images/guitar.png';
import clef from '../../images/clef.png';
import drum from '../../images/drum.png';
import artist from '../../images/artist.png';



const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div name='home' className='hdiv1'>
      <div className='hdiv2'>
        <section className="hidden">
          <p className='hp1'>Hi, WELCOME to "MelorCraft"</p>
          <h1 className='hh1'>
            Our goal is to provide mental freedom as well as a healthy mind..........
          </h1>
        </section>
        <section className="hidden">
          <p className='hp2'>
          Welcome to Melorcraft, your all-in-one platform designed to foster creativity, connection, 
          and growth in the world of music. Whether you're an aspiring musician, a seasoned artist,
          or simply a music enthusiast, Melorcraft offers a range of features to enhance your
          musical journey and experience. With an intuitive interface and a comprehensive set of
          tools, Melorcraft is your virtual companion for all things music.
          </p>
        </section>
        <div>
          <button className='hbtn1'>
            <a id="serbtn" href="/Services">View Our Services</a>
            <span className='hspan1'></span>
          </button>
        </div>
        <section>
          <div className="hvideo">
            <div className="hvideo1 hidden">
              <video src={hv4} controls className="video-with-border"></video>
            </div>
            <div className="hvideo1 hidden">
              <video src={hv5} controls className="video-with-border"></video>
            </div>
            <div className="hvideo1 hidden">
              <video src={hv6} controls className="video-with-border"></video>
            </div>
          </div>
        </section>
        <div class="containercd1">
        <div className="card" float="left">
            <div className="circle">
            <img src={guitar} alt="Melor Logo" className="logo" />
                <div className="content">
                    <h2>GUITAR</h2>
                    <br></br>
                    <p >The guitar consists of a hollow wooden body with six strings stretched over it and along a narrow neck. 
                      Guitars usually have a single, round sound hole in the body. 
                      The strings can be strummed with the fingers or plucked. 
                    </p>
                    <br></br>
                    <a  href="/register">Join with us</a>
                </div>
            </div>
        </div>
        <div className="card2" float="right">
            <div className="circle">
            <img src={clef} alt="Melor Logo" className="logo" />
                <div className="content">
                    <h2>TREBLE CLEF</h2>
                    <br></br>
                    <p >The treble clef is the most used clef in Western music notation.
                       It primarily notates musical notes above middle C.
                       The treble clef is shaped like an ornamental letter G,
                       and its inner curve surrounds the note G4 that falls above middle C.
                    </p>
                    <br></br>
                    <a href="/register">Join with us</a>
                </div>
            </div>
        </div>
        </div>
        <div class="containercd1">
        <div className="card3" float="right">
            <div className="circle">
            <img src={drum} alt="Melor Logo" className="logo" />
                <div className="content">
                    <h2>DRUMSET</h2>
                    <br></br>
                    <p >Though there is no original standard configuration for drum kits, 
                      drum kits have a five-piece set, including two tom-toms, a floor tom, a bass drum, and a snare drum. 
                      The floor tom is a tom-tom that has a stand or legs and sits on the floor.
                    </p>
                    <br></br>
                    <a href="/register">Join with us</a>
                </div>
            </div>
        </div>
        <div className="card4" float="right">
            <div className="circle">
            <img src={artist} alt="Melor Logo" className="logo" />
                <div className="content">
                    <h2>ROCK SINGER</h2>
                    <br></br>
                    <p >Rock singers are part of Rock music which is also known as ‘rock and roll’. 
                      Originating in America and Europe, 
                      the style of this music was heavily inspired from African American music composers like Chuck Berry and Little Richard. 
                    </p>
                    <br></br>
                    <a href="/register">Join with us</a>
                </div>
            </div>
        </div>
        </div>
      </div>
      <p className="banner1"><img src={hmg11} className='hmg11' alt="Logo" /></p>
    </div>
    
  );
};

export default Home;
