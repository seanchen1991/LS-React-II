import React from 'react'; 
import './SearchBar.css'; 
import PropTypes from 'prop-types'; 


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {}; 
    }

    render () {

        return (
        <div className = "searchBar">
          <div className ="leftSideSearhBar"><i className="fab fa-instagram">   &#124;</i> <span>Instagram</span> </div>
          <input className = "searchInput"placeholder="search"/>
          <div className = "rightSideSearchBar"><i className="far fa-compass"></i><i className="far fa-heart"></i> <i className="far fa-user"></i></div>
          <hr className ="hrLine"/>

        </div>
        );
    }
}

export default SearchBar; 