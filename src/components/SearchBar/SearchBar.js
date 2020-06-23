import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="What are you craving?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Go For It</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;