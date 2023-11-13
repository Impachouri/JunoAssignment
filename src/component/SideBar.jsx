import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './sidebar.css';

function SideBar() {
    const [activeLink, setActiveLink] = useState('Monitoring');
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setDrawerOpen(false);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const links = ['Overview', 'Onboarding', 'Monitoring', 'Flagging', 'Source Of Income', 'UAR'];

    return (
        <div className={`sidebar ${isDrawerOpen ? 'drawer-open' : ''}`}>
            <div className='sidebar-link'>
                <div className='logo'>
                    <img className='logo-image' src="download.png" alt='Logo' />
                </div>
                <div className='links'>
                    {links.map((link, index) => (
                        <div key={index} className={`link ${link === activeLink ? 'active' : ''}`} onClick={() => handleLinkClick(link)}>
                            <span className='text'>{link}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='profile'>
                <div className='avtar'>
                    <img className='image' src='./aman.jpg' alt='Avatar' />
                </div>
                <div className='profile-content'>
                    <span className='text profile-name'>Aman Pachouri</span>
                    <span className='text'>ampachorui09@gmail.com</span>
                </div>
            </div>
            <div className={`drawer-toggle ${isDrawerOpen ? 'shift-right' : ''}`} onClick={toggleDrawer}>
                {isDrawerOpen ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    );
}

export default SideBar;
