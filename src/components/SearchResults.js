import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>;
    } else {
    return (
        <div className="images">
    <>
    {results.map((image) => (
        <img className="card-image" src={image} key={image} alt="spaceImage" />
    ))}
    </>
    </div>
    );
    }
};

export default SearchResults;

SearchResults.propTypes = {
results: PropTypes.array.isRequired
}