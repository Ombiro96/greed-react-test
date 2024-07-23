import { render, screen } from "@testing-library/react";
import { Greed } from "./greed";

test("Testing Greed component to show Hello from Greed", () => {
    render(<Greed />)
    const expectedText = screen.getByText(/Hello from Greed/i);
    expect(expectedText).toBeInTheDocument();
});