import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
// import { links, social } from './nav_data';
import logo from './logo.svg';
import './navbar.css';

const Navbar = ({ links, social }) => {
  const [showLinks, setShowLinks] = useState(false);

  const { showSocial, setShowSocial } = useState(true);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);


  useEffect( ()=>{
    if(social.length !== 0){
      setShowSocial(true);
    }else{
      setShowSocial(false);
    }
  },[]);


  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        { showSocial && (
          <ul className="social-icons">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
