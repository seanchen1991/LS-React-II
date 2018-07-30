import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css';
import logoText from './instagramLogoText.png';

const SearchBar = (props) => {
  return (  
    <div className="searchBarMainDiv">
      {/* start logo div */}
      <div className="searchBarLogoDiv">
        <i class="fa fa-instagram"></i><span>|</span><img src={logoText} alt="instagram text" />
      </div>

      {/* start input div */}
      <div className="searchBarInputDiv">
        <input placeholder="&#x1F50D;Search" />
      </div>

      {/* start links div */}
      <div className="searchBarLinksDiv">
        <ul>
          <li><i class="fa fa-compass"></i></li>
          <li><i class="fa fa-heart-o"></i></li>
          <li><i class="fa fa-user-o"></i></li>
        </ul>
      </div>



    </div>
  );
}
 
export default SearchBar;