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
import App from "./App";

describe("initial load of App container", () => {
	afterEach(cleanup);

	it("loads and displays search bar", () => {
		render(<App />);
		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("loads and displays instructions", () => {
		render(<App />);
		expect(screen.getByText("Want to try it out?")).toBeInTheDocument();
	});
});

describe("fail searches", () => {
	afterEach(cleanup);

	it("enter empty search", async () => {
		render(<App />);

		fireEvent.click(screen.getByRole("button"));

		await waitFor(() => {
			screen.getByText(
				"Please enter a valid link! Make sure it starts with https://magiceden.io/item-details/"
			);
		});
	});

	it("enter base url search", async () => {
		render(<App />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: { value: "https://magiceden.io/item-details/" },
		});

		fireEvent.click(screen.getByRole("button"));

		await waitFor(() => {
			screen.getByText(
				"Please enter a valid link! Make sure it starts with https://magiceden.io/item-details/"
			);
		});
	});

	it("enter invalid search", async () => {
		render(<App />);

		fireEvent.change(screen.getByRole("textbox"), {
			target: {
				value: "https://magiceden.io/item-details/sfsddsfsdfsdfsdfsdfsdf",
			},
		});

		fireEvent.click(screen.getByRole("button"));

		await waitFor(() => {
			screen.getByText("An Error Occured. Fix your link, or try again later.");
		});
	});

	// it("enter search that responds with an error", async () => {
	// 	render(<App />);

	// 	fireEvent.change(screen.getByRole("textbox"), {
	// 		target: {
	// 			value:
	// 				"https://magiceden.io/item-details/CDysFDNCCevjbgg5RhmF6y7y6Qk7hnPYbzDrYwtYkhSJ",
	// 		},
	// 	});

	// 	fireEvent.click(screen.getByRole("button"));

	// 	// Mock a fetch call that returns timed out response

	// 	await waitFor(() => {
	// 		screen.getByText("An Error Occured. Fix your link, or try again later.");
	// 	});
	// });
});
