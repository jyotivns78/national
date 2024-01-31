import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../assets/css/AboutContainer.css";
import HomeBanner from "../../assets/images/sport.png";
import LucknowFC from './AboutContainers/LucknowFC';
import Department from './AboutContainers/Department';

const AboutContainer = () => {
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
          <Tab eventKey="home" title={<span className={`tab-title ${activeTab === 'home' ? 'active-tab' : ''}`}>About</span>}>
            {activeTab === "home" && <img src={HomeBanner} alt="Home Banner" className='w-100' />}
          </Tab>
          <Tab eventKey="profile" title={<span className={`tab-title ${activeTab === 'profile' ? 'active-tab' : ''}`}>Lucknow FC</span>}>
            {activeTab === "profile" && <div>
              <LucknowFC />
              </div>}
          </Tab>
          <Tab eventKey="contact" title={<span className={`tab-title ${activeTab === 'contact' ? 'active-tab' : ''}`}>Department</span>}>
            {activeTab === "contact" && <div>
              <Department />
              </div>}
          </Tab>
        </Tabs>
      </section>
    </>
  );
}

export default AboutContainer;
