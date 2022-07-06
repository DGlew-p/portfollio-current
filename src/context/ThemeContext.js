import React, { createContext, useState } from "react";

import { themeData } from "../theme/theme";

export const ThemeContext = createContext();

export default function ThemeContextProvider(props) {
  // eslint-disable-next-line
  const [theme, setTheme] = useState(themeData);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const value = { theme };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}
