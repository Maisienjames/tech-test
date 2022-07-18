import React from "react";
import "../styles/search-results.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
    if (!results.length) {
        return <p>No results</p>;
    } else {
    return (
    <>
    {results.map((image) => (
        <img className="card-image" class="center" src={image} alt="spaceImage" />
    ))}
    </>
    );
    }
};

export default SearchResults;

SearchResults.propTypes = {
results: PropTypes.array.isRequired
}