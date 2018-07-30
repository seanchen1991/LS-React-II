import React from "react";
import "./SearchBar.css";
import cam from "../../assets/instagram-brands.svg";
import textLogo from "../../assets/insta-text-logo.svg";

const SearchBar = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="search-bar">
          <div className="image-group">
            <img alt="instagram camera" src={cam} className="logo-image" />
            <img
              alt="instagram logo"
              src={textLogo}
              className="logo-image text-logo"
            />
          </div>
          <div className="input-group">test</div>
          <div className="social-group">teat</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
