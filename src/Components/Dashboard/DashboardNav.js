import React from 'react'
import "./style.css";
import $ from "jquery"



const DashboardNav = () => {
  
  // ---------Responsive-navbar-active-animation-----------
  function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    //var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function () {
    setTimeout(function () { test(); });
  });
  $(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
  });
  $(".navbar-toggler").click(function () {
    setTimeout(function () { test(); });
  });


  return (
    <div>
      <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="/">Gestion Absence</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <div className="hori-selector"><div className="left" /><div className="right" /></div>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="fas fa-tachometer-alt" />Dashboard</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/"><i className="far fa-address-book" />Address Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="far fa-clone" />Components</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="far fa-calendar-alt" />Calendar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="far fa-chart-bar" />Charts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><i className="far fa-copy" />Documents</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DashboardNav;