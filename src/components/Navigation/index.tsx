import { useState, useContext, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Container,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Hidden,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { AppContext } from "../Context";
import defaultContext from "../Context/defaultContext";
import IAppContext from "../../interfaces/IAppContext";
import { LOCALES } from "../../config";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state, dispatch } = useContext(AppContext) || defaultContext;

  // const setLanguage = useCallback((locale: string) => {
  //   dispatch({
  //     type: "setLocale",
  //     locale,
  //   })
  // }, []);
  const setLanguage = (locale: string) => {
    // dispatch({
    //   type: "setLocale",
    //   locale,
    // });
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link
          to="settings"
          component={RouterLink}
          onClick={() => setDrawerOpen(false)}
        >
          <ListItem button>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Hidden only={["lg", "xl"]}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "white", flexGrow: 1 }}
              >
                Movies recommendation
              </Typography>
            </Link>
            <Box>
              {state.locale}
              <Button
                disabled={state.locale === "en-us"}
                sx={{ my: 2, color: "white" }}
                // onClick={setLanguage(LOCALES.ENGLISH)}
              >
                English
              </Button>
              <Button sx={{ my: 2, color: "white" }}>Українська</Button>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "none", lg: "flex" } }}>
              <Button
                component={RouterLink}
                to="settings"
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Settings
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
