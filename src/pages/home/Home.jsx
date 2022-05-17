import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";
import heroImg from "../../assets/heroImg.png"

function Home() {
  return (
    <div className='home-container flex flex-col items-center justify-around md:flex-row'>
      <div className='home-text text-center p-12 md:text-left'>
        <h1 className='home-heading text-4xl font-bold my-6'>TASKY</h1>
        <p className='text-xl my-4'>Now managing and keeping track of your day-to-day tasks becomes easy with Tasky.</p>
        <Link to="/task"><button className='hero-btn px-4 py-2 mt-4'>Manage Task</button></Link>
      </div>
      <div className='home-img-wrapper p-12'>
        <img className='home-img m-auto w-full md:w-96' src={heroImg} alt="hero-illustration" />
      </div>
    </div>
  )
}

export {Home};