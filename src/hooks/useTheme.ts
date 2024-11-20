import { useState } from "react";

export function useTheme() {
  const [themeSelected, setThemeSelected] = useState<boolean>(false);
  const changeTheme = () => {
    setThemeSelected((prev) => !prev);
  };
  const theme = themeSelected ? "theme-light" : "";
  return { theme, changeTheme };
}
