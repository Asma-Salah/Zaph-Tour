import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import Links from "./Links";
import { useState } from "react";

function Navigation() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <ExploreIcon
            sx={{ bgcolor: "white", borderRadius: "2rem", p: ".3rem" }}
            fontSize="large"
          />

          <Box>
            <Typography variant="h5" fontWeight={800}>
              Zaphs tours
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} display={{ xs: "none", md: "flex" }}>
          <Links />
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          Get started
        </Button>
        <IconButton
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MenuIcon
            sx={{ display: { xs: "block", md: "none" } }}
            fontSize="large"
          />
        </IconButton>
        <Drawer
          open={openDrawer}
          anchor="right"
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          <Stack pt={5} pr={3} pl={3} spacing={2}>
            <Links />
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
