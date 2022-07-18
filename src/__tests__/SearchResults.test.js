import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
    const validProps = {
        searchResults: ["pluto", "venus"]
    };

    it("renders correctly", () => {
    const { asFragment } = render(
    <SearchResults results={validProps.searchResults}/>);
    expect(asFragment()).toMatchSnapshot();
    });
});