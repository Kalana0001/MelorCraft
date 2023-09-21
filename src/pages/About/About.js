import React, { useEffect } from 'react';
import './About.css';
import img1 from '../../images/headset1.png';
import img2 from '../../images/headset2.png';
import img3 from '../../images/headset3.png';
import img4 from '../../images/headset4.png';
import img5 from '../../images/headset7.png';
import img6 from '../../images/headset8.png';
import img7 from '../../images/headset9.png';
import img8 from '../../images/headset10.png';


const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add('show1');
        } else {
          entry.target.classList.remove('show1');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.ahidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div name='about' className='about1'>
      <div className='adiv1'>
        <section className="ahidden">
          <p className='ap1'>About</p>
       </section>
       <section className="ahidden">
          <h1 id='ah1'>
           <p> At MelorCraft, we're on a mission to "Our goal is to provide mental freedom as well as a healthy mind........... "
           </p>
           <p>
               We're passionate about what we do and are excited to share our story with you.
           </p>
           <p> Our Story:- MelorCraft was founded in 2023.</p>
           <p> 
              There ara Three members in our team.We came to this extent after working together well.
          </p>
           <p> Our goal is to provide mental freedom as well as a healthy mind..........</p>
           <p> Contact Us: Have questions, feedback, or just want to say hello? We'd love to hear from you. </p>
          </h1>
        </section>
        <section className="ahidden">
          <p className='ap2'>
            <p >Thank you for visiting Melor Craft.</p>
            <p >We look forward to embarking on this journey with you as we work towards our common goal</p>
            <p>Together, we can make a difference. </p>
            <div className='acontact' >
            <p> " MelorCraft"</p>
            <p>  Email:- melorcraft@gmail.com </p>
            <p>  Contact:- 737999879</p>
            </div>
          </p>
        </section>
        <p id="headset">Reserve your precious headset quickly.............</p>
        <div className='acscard1'>
          <p className='video-with-border' id='ap3'><img src={img1} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap4'><img src={img2} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap5'><img src={img3} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap6'><img src={img4} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap7'><img src={img5} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap8'><img src={img6} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap9'><img src={img7} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='ap10'><img src={img8} className='hmg' alt="Logo" /></p>
        </div>
        <div>
          <button className='abtn1'>
            <a id="aboutbtn" href="#">Grab Your Headset</a>
            <span className='aspan1'></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
