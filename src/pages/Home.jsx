import React from 'react';
import "../assets/css/Home.css";
import FirstNav from '../components/FirstNav';
import SecondNav from '../components/SecondNav';

const Home = () => {
  return (
    <div className='vh-100 homes'>
        <FirstNav />
        <SecondNav />
    </div>
  )
}

export default Home