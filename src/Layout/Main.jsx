import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";
import { useEffect } from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const Main = () => {
  function Toggler() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
      // <Box
      //   sx={{
      //     display: "flex",
      //     width: "100%",
      //     alignItems: "center",
      //     justifyContent: "center",
      //     bgcolor: "background.default",
      //     color: "text.primary",
      //     borderRadius: 1,
      //     p: 3,
      //   }}
      // >
      //   {theme.palette.mode} mode
      // </Box>
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    );
  }

  // const storage = typeof window !== 'undefined' ? localStorage.theme : 'light';
  // const [storageTheme, setStorageTheme] = useState(storage);

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // useEffect(() => {
  //   localStorage.setItem('theme', mode);
  //   setStorageTheme(mode);
  // }, [theme, storageTheme, mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* <Toggler /> */}
        <Box>
          <Navbar ></Navbar>
          <Outlet ></Outlet>
          <Footer ></Footer>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Main;
