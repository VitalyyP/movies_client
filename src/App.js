import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Recommend from "./pages/Recommend";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Navigation />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="settings" element={<Settings />} />
              <Route path="recommend" element={<Recommend />} />
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
