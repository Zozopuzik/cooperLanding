import React from 'react'
import './Nav.css';
import { Link as ScrollLink } from "react-scroll";
export default function () {
  return (
    <div>
        <div className="nav">
            <div className="logo">Logo</div>
            <div className="navigation-wrapper">
                <div className="navigation"><ScrollLink to="header" smooth={true} duration={500}>Who am I</ScrollLink></div>
                <div className="navigation"><ScrollLink to="slider" smooth={true} duration={500}>Photos</ScrollLink></div>
                <div className="navigation"><ScrollLink to="contacts" smooth={true} duration={500}>Contacts</ScrollLink></div>
            </div>
        </div>
    </div>
  )
}
