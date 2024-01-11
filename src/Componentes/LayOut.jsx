import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  AppBar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router";

const drawerWidth = 240;

const sideBarItems = [
  {
    text: "My Notes",
    icon: <SubjectOutlined color="secondary" />,
    path: "/",
  },
  {
    text: "Create Notes",
    icon: <AddCircleOutlineOutlined color="secondary" />,
    path: "/createnote",
  },
];

const LayOut = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <box sx={{ display: "flex" }}>
      {/*nav-bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: `${drawerWidth}`,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}> This is my note App</Typography>
          <Typography> const</Typography>
        </Toolbar>
      </AppBar>

      {/*Side-Bar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h3" sx={{ padding: 2, fontWeight: 580 }}>
          Genius Notes
        </Typography>

        <List>
          {sideBarItems.map((item) => {
            const { text, icon, path } = item;
            return (
              <ListItem
                key={text}
                onClick={() => navigate(path)}
                sx={{
                  ...(location.pathname === path
                    ? { backgroundColor: "#f9f9f9" }
                    : null),
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#f9f9f9",
          marginLeft: "100px",
          flexGrow: 1,
          marginTop: `${theme.mixins.toolbar.minHeight}px`,
          paddingBlock: 5,
          paddingLeft: 5,
        }}
      >
        {children}
      </Box>
    </box>
  );
};

export default LayOut;
