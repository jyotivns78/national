import React, { useState } from 'react';
import Logo from "../assets/images/LFC  LOGOB FV 1.png";
import "../assets/css/SecondNav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import HomeContainer from '../pages/containers/HomeContainer';
import AboutContainer from '../pages/containers/AboutContainer';
import SquadContainer from '../pages/containers/SquadContainer';
import LfcContainer from '../pages/containers/LfcContainer';
import Contact from '../pages/containers/Contact';

const SecondNav = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className='second_nav_container justify-content-center align-items-center p-3'>
            <div className='second_nav d-flex'>
           
                <div className='logo col-2'>
                    <div className='logo_div col-9'>
                    <img src={Logo} alt="Logo" />
                    </div>
                </div>
                <div className='navb col-10'>
                    <div className='nav_header d-flex justify-content-between pt-3 pb-3'>

                        
                        <h2>LUCKNOW FOOTBALL CLUB</h2>
                        <div className='social_links'>
                        <ul>
                            <li><FontAwesomeIcon className='icon' icon={faEnvelope} /></li>
                            <li><FontAwesomeIcon className='icon' icon={faInstagram} /></li>
        <li><FontAwesomeIcon className='icon' icon={faFacebook} /></li>
                        </ul>
                    </div>
                    </div>
                    <div className='menus'>
                        <nav className="navbar navbar-expand-lg navbar-light p-0">
                            <div className="container-fluid p-0">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse new_nav" id="navbarNav">
                                    <ul className="navbar-nav nav_new">
                                        <li className={`nav-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => handleTabClick('Home')}>
                                            <a className="nav-link" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'About' ? 'active' : ''}`} onClick={() => handleTabClick('About')}>
                                            <a className="nav-link" href="#">About</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'Squad' ? 'active' : ''}`} onClick={() => handleTabClick('Squad')}>
                                            <a className="nav-link" href="#">Squad</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'LFC_TV' ? 'active' : ''}`} onClick={() => handleTabClick('LFC_TV')}>
                                            <a className="nav-link" href="#">LFC TV</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'Contacts' ? 'active' : ''}`} onClick={() => handleTabClick('Contacts')}>
                                            <a className="nav-link" href="#">Contacts</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'Tickets' ? 'active' : ''}`} onClick={() => handleTabClick('Tickets')}>
                                            <a className="nav-link" href="#">Tickets</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'Shop' ? 'active' : ''}`} onClick={() => handleTabClick('Shop')}>
                                            <a className="nav-link" href="#">Shop</a>
                                        </li>
                                        <li className={`nav-item ${activeTab === 'Application' ? 'active' : ''}`} onClick={() => handleTabClick('Application')}>
                                            <a className="nav-link" href="#">Application</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                   
                </div>
                
            </div>
            {
            activeTab === 'Home' && 
            <div className="tab-content">
                <HomeContainer />
            </div>
            }
            {activeTab === 'About' && <div className="tab-content"><AboutContainer /></div>}
            {activeTab === 'Squad' && <div className="tab-content"><SquadContainer /></div>}
            {activeTab === 'LFC_TV' && <div className="tab-content"><LfcContainer /></div>}
            {activeTab === 'Contacts' && <div className="tab-content"><Contact /></div>}
            {activeTab === 'Tickets' && <div className="tab-content">Tickets Container Content</div>}
            {activeTab === 'Shop' && <div className="tab-content">Shop Container Content</div>}
            {activeTab === 'Application' && <div className="tab-content">Application Container Content</div>}
            {/* Add other containers based on menu items */}
        </div>
    );
}

export default SecondNav;
