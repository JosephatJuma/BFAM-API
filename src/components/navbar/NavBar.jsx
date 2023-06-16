import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ShoppingCartCheckout } from "@mui/icons-material";
import DrawerComponent from "./DrawerComponent";
function NavBar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const PAGES = ["Products", "Services", "Contact", "About"];
  const loggedIn = useSelector((state) => state.loggedIn);
  const user = useSelector((state) => state.user);

  console.log(user);
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <ShoppingCartCheckout color="black" />
          <Typography color={"grey"}>BFAM</Typography>
          {isMedium ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                sx={{ color: "grey" }}
              >
                {PAGES.map((page, index) => {
                  return <Tab key={index} label={page}></Tab>;
                })}
              </Tabs>

              {loggedIn === true ? (
                <Typography>Hello user</Typography>
              ) : (
                <Box sx={{ marginLeft: "auto" }}>
                  <Button
                    sx={{ backgroundColor: "blue" }}
                    variant="outlines"
                    LinkComponent={Link}
                    to={"login"}
                  >
                    Login
                  </Button>

                  <Button
                    sx={{ backgroundColor: "blue", marginLeft: "10px" }}
                    variant="outlines"
                    LinkComponent={Link}
                    to={"signup"}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
