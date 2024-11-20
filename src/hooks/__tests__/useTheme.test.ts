import { act, renderHook } from "../../utils/test-config.utils";
import { useTheme } from "../useTheme";

describe("Theme", () => {
  it("should get value and function of theme", async () => {
    const { result } = renderHook(useTheme);

    //expect by default will be false to dark mode
    expect(result.current.theme).toBe("");

    //if we change the theme we need to get theme-light
    await act(async () => {
      result.current.changeTheme();
    });
    expect(result.current.theme).toBe("theme-light");
  });
});
