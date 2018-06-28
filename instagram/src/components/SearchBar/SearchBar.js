import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <form onSubmit = {props.searchUsername}>
                SEARCH INPUT FIELD:
                <input 
                type = "text" 
                onChange = {props.searchFieldHandler}
                placeholder = "Enter username"
                value = {props.activeValue}
                />
            </form>
        </div>
    );
}

export default SearchBar;