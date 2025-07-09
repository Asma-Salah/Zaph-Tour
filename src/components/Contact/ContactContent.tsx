import { Box, Typography, Stack, Grid, TextField, Button } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { green } from "@mui/material/colors";
function ContactContent() {
  return (
    <Box
      pt={2}
      sx={{
        backgroundColor: "#0d1b2a",
        py: 6,
        px: 5,
        color: "white",
      }}
    >
      <Stack>
        <Typography
          variant={"h4"}
          textTransform={"capitalize"}
          fontWeight={800}
          textAlign={"center"}
          mt={"5rem"}
        >
          CONTACT US
        </Typography>

        <Grid
          container
          columns={2}
          pt={4}
          // justifyContent={"center"}
          spacing={6}
        >
          <Grid size={{ xs: 2, md: 1, sm: 2 }} justifyContent={"center"}>
            <Box bgcolor={green} overflow={"hidden"} width={"100%"}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.824378295275!2d37.93639391486158!3d0.23470363896916777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17884a8165287bc5%3A0x2bd41a069105211e!2sMaua%20Basin%20Hotel!5e1!3m2!1sen!2ske!4v1752053200959!5m2!1sen!2ske"
                width="600"
                height="450"
                loading="lazy"
              ></iframe>
            </Box>
          </Grid>

          {/* form  to be filled */}

          <Grid
            size={{ xs: 2, md: 1, sm: 2 }}
            sx={{
              bgcolor: "white",
              p: 4,
              color: "#000",
              borderRadius: "2",
              // width: "80%",
            }}
          >
            <Typography variant="h6" mb={1}>
              Send Message
            </Typography>
            <Grid spacing={2}>
              <Grid mb={2}>
                <TextField label="First Name" fullWidth required />
              </Grid>
              <Grid mb={2}>
                <TextField label="last Name" fullWidth required />
              </Grid>
              <Grid mb={2}>
                <TextField label="Email" type="email" fullWidth required />
              </Grid>
              <Grid mb={2}>
                <TextField
                  label="Messages"
                  fullWidth
                  required
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid>
                <Button variant="contained" sx={{ borderRadius: "10" }}>
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      <Stack spacing={3} justifyContent={"center"} alignItems={"center"} pt={6}>
        {/* address */}
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <AddLocationIcon
              sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
            />
            <Box>
              <Typography fontWeight={900}>ADDRESS</Typography>
              <Typography>12 Street, Moi avenue, Nairobi</Typography>
            </Box>
          </Stack>
          {/* phone address */}
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <LocalPhoneIcon
              sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
            />
            <Box>
              <Typography fontWeight={900}>Phone</Typography>
              <Typography>+656-654-621</Typography>
            </Box>
          </Stack>
          {/* mobile address */}
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <MobileScreenShareIcon
              sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
            />
            <Box>
              <Typography fontWeight={900}>Mobile</Typography>
              <Typography>071234567</Typography>
            </Box>
          </Stack>
          {/* web address */}
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <PublicIcon
              sx={{ bgcolor: "#f90000", borderRadius: "2rem", p: ".3rem" }}
            />
            <Box>
              <Typography fontWeight={900}>Website</Typography>
              <Typography>zaphstours.com</Typography>
            </Box>
          </Stack>
        </Stack>
        <Box mt={3}>
          <Typography mt={2} fontWeight={700}>
            Follow Us
          </Typography>
          <Stack direction={"row"} spacing={1} mt={1} mb={5}>
            <FacebookIcon color="secondary" />
            <XIcon color="secondary" />
            <LinkedInIcon color="secondary" />
            <InstagramIcon color="secondary" />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
export default ContactContent;
