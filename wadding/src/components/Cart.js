import React from 'react';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'


const Navbar = () => {
  return (
    <nav className="navbar mb-12 mb-lg-24 navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="img-fluid" src={img1} alt="Basko Logo" />
        </a>
        <button className="d-lg-none navbar-burger btn px-0 rounded-pill" style={{ border: 'none' }} type="button">
          <svg className="text-primary" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="56" height="56" rx="28" fill="currentColor"></rect>
            <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-lg-auto me-4">
            <li className="nav-item me-4"><a className="nav-link py-0" href="/">Features</a></li>
            <li className="nav-item me-4"><a className="nav-link py-0" href="/">Pricing</a></li>
            <li className="nav-item me-4"><a className="nav-link py-0" href="/">Automation</a></li>
            <li className="nav-item"><a className="nav-link py-0 border-start" href="/">Customer Login</a></li>
          </ul>
          <div><a className="btn btn-primary py-3" href="/">Try 14 Days Free Trial</a></div>
        </div>
      </div>
    </nav>
  );
};

const HeaderSection = () => {
  return (
    <div className="container">
      <div className="mw-lg-3xl mx-auto mb-24 text-center">
        <h1 className="mb-4">Boost your brand's visibility and reach fast.</h1>
        <p className="lead mw-xl mx-auto mb-10">Use and reuse tons of responsive sections to create the perfect layout. Sections are ready.</p>
        <a className="btn btn-primary py-4 mb-6" href="/">Try 14 Days Free Trial</a>
        <div>
          <span className="fs-6">No Credit Card Required / Cancel Anytime</span>
        </div>
      </div>
      <div className="position-relative d-lg-flex mw-lg mw-lg-3xl mw-xl-6xl mx-auto justify-content-between align-items-center">
        <img className="d-none d-lg-block position-absolute top-0 h-100 end-0 img-fluid rounded-pill" src={img3} alt="" />
        <div className="mw-xl mw-lg-lg mw-xl-2xl position-relative">
          <img className="position-absolute top-0 start-0 d-block w-100 h-100 rounded-pill" src={img2} alt="" />
          <div className="position-relative d-lg-flex align-items-center">
            <div className="text-center flex-shrink-0 py-6 py-lg-0 px-12 ps-xl-24 pe-xl-16">
              <span className="d-block fs-1 text-white fw-semibold">168%</span>
              <span className="d-block mb-2 fs-4 fw-semibold text-white">Monthly Revenue</span>
              <p className="fs-6 text-white fw-medium">
                <span className="d-block">Average result customers sees</span>
                <span className="d-block">after using Subba</span>
              </p>
            </div>
            <img className="position-relative img-fluid ms-lg-n6 ms-xl-n0 mw-lg-sm mw-xl-none" src="basko-assets/images/headers/revenue.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs" style={{ zIndex: 9999 }}>
      <div className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark" style={{ opacity: '75%' }}></div>
      <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
        <div className="d-flex align-items-center">
          <a className="me-auto h4 mb-0 text-decoration-none" href="/">
            <img className="img-fluid" src={img4} alt="Basko Logo" />
          </a>
          <a className="navbar-close" href="/">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="/111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>
        </div>
        <div className="py-12">
          <ul className="nav flex-column">
            <li className="nav-item mb-4"><a className="nav-link text-dark" href="/">Features</a></li>
            <li className="nav-item mb-4"><a className="nav-link text-dark" href="/">Pricing</a></li>
            <li className="nav-item mb-4"><a className="nav-link text-dark" href="/">Automation</a></li>
            <li className="nav-item pt-4 border-top"><a className="nav-link text-dark" href="/">Customer Login</a></li>
          </ul>
        </div>
        <div><a className="btn btn-primary d-block" href="/">Try 14 Days Free Trial</a></div>
      </nav>
    </div>
  );
};

const Cart= () => {
  return (
    <section className="pb-12 pb-lg-24 bg-white">
      <Navbar />
      <HeaderSection />
      <MobileMenu />
    </section>
  );
};

export default Cart;

