import React from "react";
import { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
    const validProps = {
        setSearchResults: ["pluto", "venus"]
    };
    
    it("renders correctly", () => {
        const { asFragment } = render(<Search results={validProps.setSearchResults}/>);
        expect(asFragment()).toMatchSnapshot();
    });
});