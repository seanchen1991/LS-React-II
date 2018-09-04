import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.searchInput = React.createRef();
		this.state = {};
	}

	focusSearchInput = () => {
		this.searchInput.current.focus();
	};

	render() {
		return (
			<nav className="SearchBar">
				<div className="container">
					<div className="logo">
						<a href="/" id="glyph" className="sprite" />
						<a href="/" id="logotype" className="sprite" />
					</div>

					<div className="search-box">
						<input
							type="text"
							className="search-input"
							placeholder="Search"
							ref={this.searchInput}
							onBlur={this.props.toggleSearchLid}
						/>
						<span className="sprite" id="search" />
						<button
							className={'search-lid' + (this.props.searchLid ? '' : ' hidden')}
							onClick={() => {
								this.props.toggleSearchLid();
								this.focusSearchInput();
							}}
						>
							<span id="search" className="sprite" />
							<span className="search-lid-text">Search</span>
						</button>
					</div>

					<div className="navigation">
						<a href="/" id="explore" className="sprite" />
						<a href="/" id="activity" className="sprite" />
						<a href="/" id="profile" className="sprite" />
					</div>
				</div>
			</nav>
		);
	}
}

export default SearchBar;
