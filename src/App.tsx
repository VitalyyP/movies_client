import { useCallback, useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Container, Box } from "@mui/material";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  Operation,
  from,
} from "@apollo/client";

import Navigation from "./components/Navigation";
import Home from "./pages/Home/index";
import Settings from "./pages/Settings";
import Recommend from "./pages/Recommend";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import LanguageContext from "./components/Context/Context";
import { AppContext } from "./components/Context";
import { LOCALES } from "./const";

function App() {
  const context = useContext(AppContext);
  const locale = context?.state.locale;
  // const [language, setLanguage] = useState(LOCALES.ENGLISH);
  const httpLink = new HttpLink({ uri: "http://localhost:4000/" });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers")
      ? operation.getContext().hearedrs
      : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <>
      {/* <LanguageContext.Provider value={{ language, setLanguage }}> */}
      <ApolloProvider client={client}>
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
      </ApolloProvider>
      {/* </LanguageContext.Provider> */}
    </>
  );
}

export default App;
