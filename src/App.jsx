import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Grow from "@mui/material/Grow";
import Main from "./pages/Main";
import { BackToTop } from "./components";

export default function App() {
  return (
    <div className='app'>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        style={{
          fontSize: "1rem",
          padding: "1px 10px",
          fontWeight: "600",
          display: "flex",
          alignItems: "center",
        }}
        TransitionComponent={Grow}
        hideIconVariant
        preventDuplicate>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </Router>

        <BackToTop />
      </SnackbarProvider>
    </div>
  );
}
