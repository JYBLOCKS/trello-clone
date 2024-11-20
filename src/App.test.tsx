import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App Component Testing", () => {
  it("should display Hello, world! on App", () => {
    render(<App />);
    const title = screen.queryByRole("heading", { name: "Hello, world!" });
    expect(title).toBeDefined();
  });
});
