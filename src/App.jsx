import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Grow from "@mui/material/Grow";
// import { ThemeContext } from "./context/ThemeContext";
import Main from "./pages/Main";
import { BackToTop } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  // const { theme } = useContext(ThemeContext);

  return (
    <div className='app'>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        TransitionComponent={Grow}
        hideIconVariant
        dense
        preventDuplicate>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>

        <BackToTop />
      </SnackbarProvider>
    </div>
  );
}
