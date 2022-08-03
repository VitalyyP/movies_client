import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Navigation from "./components/Navigation";
import Home from "./pages/Home/index";
import Settings from "./pages/Settings";
import Recommend from "./pages/Recommend";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:4000/",
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <>
      <ApolloProvider client={client}>
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
                <Route path="movie/:id" element={<MovieDetailsPage />} />
                <Route path="settings" element={<Settings />} />
                <Route path="recommend" element={<Recommend />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
