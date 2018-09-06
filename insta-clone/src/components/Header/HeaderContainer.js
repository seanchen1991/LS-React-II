import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import styled from 'styled-components';

const HeaderContainer = props => {
const HeaderWrapper = styled.div`
  background: #222;
  height: 200px;
  padding: 20px;
  color: white;
`;

    return (
      <HeaderWrapper>
      <header className="header">
      <div className="user-dashboard">
      <h2>Welcome, {localStorage.username}!</h2>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }
      }>Logout</button>
      </div>
      <div className="searchbar">
        <h1 className="title-headline">NOT Instagram</h1>
        <SearchBar
        searchPosts={props.searchPosts}
        handleChange={props.handleChange}/>
        </div>
        </header>
        </HeaderWrapper>
    )

}

export default HeaderContainer;
