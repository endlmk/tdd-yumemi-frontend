import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import PrefCheckBox from "../components/PrefCheckBox";

test("PrefCheckBox", () => {
  render(<PrefCheckBox name="北海道" />);
  expect(screen.getByRole("checkbox", { name: "北海道" })).toBeDefined();
});
