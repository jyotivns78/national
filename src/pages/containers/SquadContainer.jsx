import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../../assets/css/AboutContainer.css";
import HomeBanner from "../../assets/images/sport.png";
import Team from './SquadContainer/Team';
import Academy from './SquadContainer/Academy';

const SquadContainer = () => {

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
        <Tab eventKey="home" title={<span className={`tab-title ${activeTab === 'home' ? 'active-tab' : ''}`}>Squad</span>}>
          {activeTab === "home" && <img src={HomeBanner} alt="Home Banner" className='w-100' />}
        </Tab>
        <Tab eventKey="profile" title={<span className={`tab-title ${activeTab === 'profile' ? 'active-tab' : ''}`}>Team</span>}>
          {activeTab === "profile" && <div className='col-12'>
            <Team />
            </div>}
        </Tab>
        <Tab eventKey="contact" title={<span className={`tab-title ${activeTab === 'contact' ? 'active-tab' : ''}`}>Academy</span>}>
          {activeTab === "contact" && <div>
            <Academy />
            </div>}
        </Tab>
      </Tabs>
    </section>
  </>
  )
}

export default SquadContainer