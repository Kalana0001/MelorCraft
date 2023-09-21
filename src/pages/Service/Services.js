import React from 'react';
import './Services.css';
import lyrics from '../../images/lyrc01.png';
import guit from '../../images/crd.png';
import songswap from '../../images/swp1.png';
import melo from '../../images/mel.png';
import musmoode from '../../images/md.png';
import band from '../../images/vb.png';
import therapy from '../../images/tp1.png';
import vocal from '../../images/vt.png';
import mentor from '../../images/msm.png';

const Service = () => {
  return (
    <div className="App">
      <div className="flex-container">
        <div className="scard1">
          <div className="circle" style={{ "--clr": "#00ffc3" }}></div>
          <div className="content">
            <h2>Lyrics</h2>
            <p>Find the lyrics of any song. You can download the lyrics of any song you like here.</p>
            <a className="slink" href="/lyrics">Try Now</a>
          </div>
          <img className='simage' src={lyrics} alt="Lyrics" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#00eeff" }}></div>
          <div className="content">
            <h2>Guitar Chords</h2>
            <p>Find the guitar chords. You can download the chords of any song you like here.</p>
            <a href="/guitar-chords">Try Now</a>
          </div>
          <img src={guit} alt="Guitar Chords" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#00ff55" }}></div>
          <div className="content">
            <h2>Song Swap</h2>
            <p>Swap any song. You can swap and download any kind of song according to your choice.</p>
            <a href="/song-swap">Try Now</a>
          </div>
          <img src={songswap} alt="Song Swap" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#ffb700" }}></div>
          <div className="content">
            <h2>Melody Maker</h2>
            <p>Make any melody. You can create your own melody according to your song.</p>
            <a href="/melody-maker">Try Now</a>
          </div>
          <img src={melo} alt="Melody Maker" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#fbff00" }}></div>
          <div className="content">
            <h2>Music Mood Board</h2>
            <p>Create your music mood board with any kind of song according to your choice.</p>
            <a href="/music-mood-board">Try Now</a>
          </div>
          <img src={musmoode} alt="Music Mood Board" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#ffffff" }}></div>
          <div className="content">
            <h2>Virtual Band</h2>
            <p>Try virtually. You can try any songs with virtual bandmates.</p>
            <a href="/virtual-band">Try Now</a>
          </div>
          <img src={band} alt="Virtual Band" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#d000ff" }}></div>
          <div className="content">
            <h2>Therapy Sessions</h2>
            <p>Feel better. Join online therapy sessions according to your choice.</p>
            <a href="/therapy-sessions">Try Now</a>
          </div>
          <img src={therapy} alt="Therapy Sessions" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#ff5100" }}></div>
          <div className="content">
            <h2>Vocal Training</h2>
            <p>Sweet voice. Make and improve your voice through vocal training.</p>
            <a href="/vocal-training">Try Now</a>
          </div>
          <img src={vocal} alt="Vocal Training" />
        </div>

        <div className="scard1">
          <div className="circle" style={{ "--clr": "#ff00ae" }}></div>
          <div className="content">
            <h2>Mentorship</h2>
            <p>Get mentorship for your musical journey.</p>
            <a href="/mentorship">Try Now</a>
          </div>
          <img src={mentor} alt="Mentorship" />
        </div>
      </div>
    </div>
  );
}

export default Service;
