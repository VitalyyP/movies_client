import { useState, useContext } from "react";
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
import IAppContext from "../../interfaces/IAppContext";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { state: {
    locale: string;
},dispatch: React.Dispatch<{
    type: string;
    locale: string;
  }> } = useContext(AppContext);

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
