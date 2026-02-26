import { render, screen } from "@testing-library/react";
import Income from "../components/Income";

test("renders income page", () => {
  render(<Income />);
  const text = screen.getByText(/Income Page/i);
  expect(text).toBeInTheDocument();
});