import React from 'react';
import HomeBanner from "../../assets/images/sport.png";

const HomeContainer = () => {
  return (
    <>
    <div className='home_banner_section pt-3'>
        <div className='home_banner_image'>
            <img src={ HomeBanner } href="banner_image" className='w-100' />
        </div>
    </div>
    </>
  )
}

export default HomeContainer