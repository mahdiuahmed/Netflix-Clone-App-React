import React from "react";
import "./Nav.css";
import { useState, useEffect} from "react";

function Nav() {

const [show, handleShow] = useState(false);

const transitionNav = () => {
  if (window.scrollY > 100) {
    handleShow(true);
  }else{
    handleShow(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', transitionNav)
  return () => {
    window.removeEventListener('scroll', transitionNav)
  };
}, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
    <div class="nav__contents">
    <img
        className="nav__logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
    
     
    </div>
  );
}

export default Nav;