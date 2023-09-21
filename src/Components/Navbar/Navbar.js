import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import melologo from '../../images/melogo12.png';

const NavBar = () => {
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $('#navbarSupportedContent').on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $('.hori-selector').css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <div>
      <div className="banner" style={{ backgroundImage: 'url("b33.jpg")' }}>
        <div className="para">
          <h1>Welcome to Melor Craft</h1>
          <h2 id="anime" data-text="♫ Melor Craft ♫"> ♫ Melor Craft ♫</h2>
          <p id="p1">Discover the Best Music Solutions</p>
        </div>
      </div>
      <div className="border">
        <p></p>
      </div>

      <nav className="navbar navbar-expand-lg navbar-mainbg" style={{ backgroundImage: 'url("")' }}>
        <NavLink className="navbar-brand navbar-logo" to="/" exact>
          <img src={melologo} width="80px" alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={function () {
            setTimeout(function () {
              animation();
            });
          }}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>

            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <i className="fas fa-tachometer-alt"></i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/songs" exact>
                <i className="far fa-clone"></i>Songs
              </NavLink>
            </li>

            <li className="nav-item">
             <NavLink className="nav-link" to="/services" exact>
                <i className="far fa-chart-bar"></i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact>
                <i className="far fa-address-book"></i>About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i className="far fa-copy"></i>Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register" exact>
                <i className="far fa-copy"></i>Sign Up
              </NavLink>
            </li>
          </ul>
          <form className="d-flex custom-search-form" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
