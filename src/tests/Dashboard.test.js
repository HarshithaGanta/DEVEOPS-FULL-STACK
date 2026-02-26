import { render, screen } from "@testing-library/react";
import Dashboard from "../components/Dashboard";

test("renders dashboard page", () => {
  render(<Dashboard />);
  const text = screen.getByText(/Dashboard Page/i);
  expect(text).toBeInTheDocument();
});