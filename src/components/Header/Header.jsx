import React from "react";
import Article from "../Article/Article";
import Blink from "../Blink/Blink";
import Nav from "../Nav/Nav";
import Photo from "../Photo/Photo";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper" id="header">
      <Nav />
      <div className="content-wrapper">
        <Blink />
        <div className="text-container">
          <Article />
        </div>
        <div className="photo-container">
          <Photo></Photo>
        </div>
      </div>
    </div>
  );
}
