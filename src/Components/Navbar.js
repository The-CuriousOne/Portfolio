import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

  const [menuTab, setMenuTab] = useState(false);
  const [customMenuIcon, setCustomMenuIcon] = useState(true);
  

  const [visible, setVisible] = useState(true);
  const [scrollPos, setscrollPos] = useState(0);

  useEffect(() => {
    const handleScrolls = () =>{
      const currentScrollPos = window.scrollY;
      const visible = scrollPos > currentScrollPos;
      setscrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener('scroll',handleScrolls);
    return () => {
      window.removeEventListener('scroll',handleScrolls);
    }
  },[scrollPos]);

  const menuTabStyle = {
    transform: visible && menuTab?'translateX(0)':'translateX(100%)',
    transition: 'transform 0.5s'
  };



  const redirectToPage = () => {
    window.location.href = "/contact_me";
  };

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, []);

  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">
          <h2><a href="/">Abhigyan Kashyap</a></h2>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li className={currentPath === "/" ? "active" : ""}>
              <a href="/">
                <h3>Home</h3>
              </a>
            </li>
            <li className={currentPath === "/domain" ? "active" : ""}>
              <a href="/domain">
                <h3>Domains</h3>
              </a>
            </li>
            <li className={currentPath === "/experience" ? "active" : ""}>
              <a href="/experience">
                <h3>Experience</h3>
              </a>
            </li>
            <li className={currentPath === "/about_me" ? "active" : ""}>
              <a href="/about_me">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <button className="button" onClick={redirectToPage}>
                Contact Me
                <div className="hoverEffect">
                  <div></div>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="n-right-small">
        <div className={`customMenuIcon ${customMenuIcon ? '' : 'customMenuIconClose'}`}>
          <MenuIcon fontSize="large" onClick={() => {setCustomMenuIcon(false); setMenuTab(true);}}
          style={{ color: 'red'}}
          className="customIcon"/>
        </div>
      </div>
      <div className={`menuTab ${menuTab ? 'menuTabOpen' : ''}`} style={menuTabStyle}> 
        <ul>
          <li><CloseIcon className='customCloseIcon' fontSize="large" onClick={() => {setCustomMenuIcon(true); setMenuTab(false)}}/></li>
          <li className={currentPath === "/" ? "active" : ""}>
              <a href="/">
                <h3>Home</h3>
              </a>
            </li>
            <li className={currentPath === "/domain" ? "active" : ""}>
              <a href="/domain">
                <h3>Domains</h3>
              </a>
            </li>
            <li className={currentPath === "/experience" ? "active" : ""}>
              <a href="/experience">
                <h3>Experience</h3>
              </a>
            </li>
            <li className={currentPath === "/about_me" ? "active" : ""}>
              <a href="/about_me">
                <h3>About</h3>
              </a>
            </li>
            <li>
              <button className="button" onClick={redirectToPage}>
                Contact Me
                <div className="hoverEffect">
                  <div></div>
                </div>
              </button>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
