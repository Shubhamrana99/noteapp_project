import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";

const drawerWidth = 240;

const LayOut = ({ children }) => {
  return (
    <box sx={{ display: "flex" }}>
      {/*nav-bar */}
      <div>Nav-bar</div>

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
        <Typography variant="h3">Genius Notes</Typography>

        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={{ width: "100%", backgroundColor: "#f9f9f9", marginLeft: "100px" }}
      >
        {children}
      </Box>
    </box>
  );
};

export default LayOut;
