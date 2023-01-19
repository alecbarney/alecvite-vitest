
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "./App"
import {describe, it, expect} from "vitest"

describe("Simple working test", () => {


  it("should increment count on click", async () => {
    render(<App />)
    const counter = screen.getByRole("button", { name: /count is/i })
    expect(counter.textContent).toBe("count is 0")
    await userEvent.click(counter)
    expect(counter.textContent).toBe("count is 1")
  })
})