import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Songs.css';
import img1 from '../../images/song1.png';
import img2 from '../../images/song2.png';
import img3 from '../../images/song3.png';
import img4 from '../../images/song4.png';
import img5 from '../../images/song5.png';
import img6 from '../../images/song6.png';
import img7 from '../../images/song7.png';
import img8 from '../../images/song8.png';
import img9 from '../../images/song9.png';
import img10 from '../../images/song10.png';
import img11 from '../../images/song11.png';
import img12 from '../../images/song12.png';
import img13 from '../../images/song13.png';
import img14 from '../../images/song14.png';
import img15 from '../../images/song15.png';
import img16 from '../../images/song16.png';

const Songs = () => {
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
    <div name='songs' className='sdiv1'>
      <div className='hdiv2'>
        
          <p className='hp1'>Songs</p>
        <div className='hcscard1'>
          <p className='video-with-border' id='sp4'><img src={img1} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp5'><img src={img2} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp6'><img src={img3} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp7'><img src={img4} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp8'><img src={img5} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp9'><img src={img6} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp10'><img src={img7} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp11'><img src={img8} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp12'><img src={img9} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp13'><img src={img10} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp14'><img src={img11} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp15'><img src={img12} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp16'><img src={img13} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp17'><img src={img14} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp18'><img src={img15} className='hmg' alt="Logo" /></p>
          <p className='video-with-border' id='sp19'><img src={img16} className='hmg' alt="Logo" /></p>
        </div>
      </div>
    </div>
  );
};

export default Songs;
