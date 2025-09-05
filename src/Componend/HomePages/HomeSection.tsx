/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


const HomeSection = () => (
  <>
    <section id="home-section" className="hero-area section-link relative overflow-hidden">
    <div className="ecosystem-icon-animation">
      {[1,2,3,4,5,6].map(imageiTem => (
        <div key={imageiTem} className={`ecosystem-icon ecosystem-icon-${imageiTem}`}>
          <img src={`./assets/images/icon/${imageiTem}.png`} alt={`icon ${imageiTem}`} />
        </div>
      ))}
    </div>
    <div className="ellipse ellipse-1"></div>
    <div className="ellipse ellipse-2"></div>
    <div className="toplight"><span className="small-shadow" /></div>
    <div className="hero-line hero-line1">
      <img src="../assets/images/bg/line.png" alt="line" />
    </div>
    <div className="hero-line hero-line2">
      <img src="../assets/images/bg/line.png" alt="line" />
    </div>
    <div className="dots-background dotsBackground"></div>

    <div className="hero-card hero-card1">
      <h3>ECM Holders</h3>
      <p>20,153</p>
    </div>
    <div className="hero-card hero-card2">
      <h3>Total ECM Sold</h3>
      <p>20,153</p>
    </div>
    <div className="container mx-auto px-4">
      <div className="hero-content text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold reveal-wrapper">
          Architecting the Future of Digital Commerce MetaFusion Labs
        </h1>
        <p className="mt-5 text-lg lg:text-xl">
          Powering ECM Coin and its ecosystem—delivering scalable, low‑cost, blockchain infrastructure for e‑commerce, trading and beyond.
        </p>
        <div className="hero-btn-wrapper relative mt-8">
          <Link to="#about" className="hero-btn inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            <span>Start Exploring <i className="fa-solid fa-arrow-right ml-2"></i></span>
          </Link>
        </div>
      </div>
    </div>
  </section>
  
  </>
)

export default HomeSection
