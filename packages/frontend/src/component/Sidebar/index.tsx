import { useState } from "react";
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
import {
  HELLO,
  LAZYQUERIES,
  MUTATIONS,
  QUERIES,
  SUBSCRIPTIONS,
} from "../../routes/route-paths";

const links = [
  {
    href: HELLO,
    icon: <HomeIcon />,
    primary: "Hello",
  },
  {
    href: QUERIES,
    icon: <FileCopyIcon />,
    primary: "Queries",
  },
  {
    href: LAZYQUERIES,
    icon: <AccessTimeIcon />,
    primary: "LazyQueries",
  },
  {
    href: MUTATIONS,
    icon: <AccountCircleIcon />,
    primary: "Mutations",
  },
  {
    href: SUBSCRIPTIONS,
    icon: <HeadphonesIcon />,
    primary: "Subscriptions",
  },
];

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
          {links.map((link) => (
            <Link
              color="inherit"
              href={link.href}
              underline="none"
              key={link.href}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.primary} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
}
