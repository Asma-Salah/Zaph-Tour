import { Link, Stack } from "@mui/material";

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
        <Link href="/" color="inherit" underline="none" fontWeight={600}>
          Home
        </Link>
      </Stack>

      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <AssistantDirectionIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          href="/Destinations"
          color="inherit"
          underline="none"
          fontWeight={600}
        >
          Destinations
        </Link>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <TripOriginIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          href="/trip-types"
          color="inherit"
          underline="none"
          fontWeight={600}
        >
          Trip types
        </Link>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        {" "}
        <ContactPageIcon
          sx={{ borderRadius: "2rem", p: ".4rem" }}
          fontSize="large"
        />
        <Link
          href="/contact-us"
          color="inherit"
          underline="none"
          fontWeight={600}
        >
          Contact Us
        </Link>
      </Stack>
    </>
  );
}
export default Links;
