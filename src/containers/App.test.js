// import dependencies
import React from "react";

// import react-testing methods
import {
	render,
	fireEvent,
	waitFor,
	screen,
	cleanup,
} from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";

// the component to test
import SearchBar from "../components/SearchBar";
import Instructions from "../components/Instructions";

describe("initial load of App container", () => {
	afterEach(cleanup);

	it("loads and displays search bar", async () => {
		render(<SearchBar />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("loads and displays instructions", async () => {
		render(<Instructions heading="Want to try it out?" />);
		expect(screen.getByText("Want to try it out?")).toBeInTheDocument();
	});
});
