import { Link as MuiLinks, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import AddHomeIcon from "@mui/icons-material/AddHome";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import ContactPageIcon from "@mui/icons-material/ContactPage";

function Links() {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
        <AddHomeIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <MuiLinks
            component={"p"}
            color="inherit"
            underline="none"
            fontWeight={600}
          >
            Home
          </MuiLinks>
        </Link>
      </Stack>

      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <AssistantDirectionIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          to={"/Destinations"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MuiLinks
            component={"p"}
            color="inherit"
            underline="none"
            fontWeight={600}
          >
            Destinations
          </MuiLinks>
        </Link>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <TripOriginIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          to={"/trip-types"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MuiLinks
            component={"p"}
            color="inherit"
            underline="none"
            fontWeight={600}
          >
            Trip types
          </MuiLinks>
        </Link>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <ContactPageIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          to={"/contact-us"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MuiLinks
            component={"p"}
            color="inherit"
            underline="none"
            fontWeight={600}
          >
            Contact Us
          </MuiLinks>
        </Link>
      </Stack>
    </>
  );
}
export default Links;
