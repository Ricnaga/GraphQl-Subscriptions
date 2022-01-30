import {
  Button,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import {
  Menu as MenuIcon,
  FileCopy as FileCopyIcon,
  Headphones as HeadphonesIcon,
  AccountCircle as AccountCircleIcon,
  Home as HomeIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material";

import { useState } from "react";
export function Sidebar() {
  const [isDrawerOpen, setDrawerAsOpen] = useState<boolean>(false);
  return (
    <>
      <Grid container justifyContent="flex-end" paddingRight={1} marginTop={1}>
        <Button
          variant="contained"
          size="large"
          onClick={() => setDrawerAsOpen(true)}
        >
          <MenuIcon />
        </Button>
      </Grid>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onOpen={() => setDrawerAsOpen(true)}
        onClose={() => setDrawerAsOpen(false)}
      >
        <List>
          <Link color="inherit" href="/" underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Hello" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link color="inherit" href="/queries" underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FileCopyIcon />
                </ListItemIcon>
                <ListItemText primary="Queries" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link color="inherit" href="/mutations" underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Mutations" />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link color="inherit" href="/lazyqueries" underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccessTimeIcon />
                </ListItemIcon>
                <ListItemText primary="LazyQueries" />
              </ListItemButton>
            </ListItem>
          </Link>
          
          <Link color="inherit" href="/subscriptions" underline="none">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HeadphonesIcon />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </SwipeableDrawer>
    </>
  );
}
