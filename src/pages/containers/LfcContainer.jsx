
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../assets/css/AboutContainer.css";
import HomeBanner from "../../assets/images/sport.png";
import Gallery from './LFCContainer/Gallery';
import Match from './LFCContainer/Match';
import Media from './LFCContainer/Media';
import Training from './LFCContainer/Training';

const LfcContainer = () => {

    const [activeTab, setActiveTab] = useState("home");

    const handleTabSelect = (tab) => {
      setActiveTab(tab);
    };
  

  return (
    <>
    <section className='about_container_section p-2'>
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabSelect}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title={<span className={`tab-title ${activeTab === 'home' ? 'active-tab' : ''}`}>LFC TV</span>}>
          {activeTab === "home" && <img src={HomeBanner} alt="Home Banner" className='w-100' />}
        </Tab>
        <Tab eventKey="profile" title={<span className={`tab-title ${activeTab === 'profile' ? 'active-tab' : ''}`}>Media</span>}>
          {activeTab === "profile" && <div className='col-12'>
            <Media />
            </div>}
        </Tab>
        <Tab eventKey="contact" title={<span className={`tab-title ${activeTab === 'contact' ? 'active-tab' : ''}`}>Match</span>}>
          {activeTab === "contact" && <div>
            <Match />
            </div>}
        </Tab>
        <Tab eventKey="gallery" title={<span className={`tab-title ${activeTab === 'gallery' ? 'active-tab' : ''}`}>Gallery</span>}>
          {activeTab === "gallery" && <div>
            <Gallery />
            </div>}
        </Tab>
        <Tab eventKey="training" title={<span className={`tab-title ${activeTab === 'training' ? 'active-tab' : ''}`}>Training</span>}>
          {activeTab === "training" && <div>
            <Training />
            </div>}
        </Tab>
      </Tabs>
    </section>
  </>
  )
}

export default LfcContainer