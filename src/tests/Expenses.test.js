import { render, screen } from "@testing-library/react";
import Expenses from "../components/Expenses";

test("renders expenses page", () => {
  render(<Expenses />);
  const text = screen.getByText(/Expenses Page/i);
  expect(text).toBeInTheDocument();
});