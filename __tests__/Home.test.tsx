import { expect, test, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import PrefCheckBox from "../components/PrefCheckBox";
import userEvent from "@testing-library/user-event";

test("PrefCheckBox", async () => {
  const handelclick = vi.fn();
  render(<PrefCheckBox name="北海道" code={1} onChange={handelclick} />);
  expect(screen.getByRole("checkbox", { name: "北海道" })).toBeDefined();
  expect(handelclick).toBeCalledTimes(0);

  await userEvent.click(screen.getByRole("checkbox"));
  expect(handelclick).toBeCalledTimes(1);
  expect(handelclick).toBeCalledWith(1);
});
