import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
function AboutUs() {
  return (
    <Box pt={5} mb={10}>
      <Container>
        <Stack alignItems={"center"}>
          <Typography
            variant={"h4"}
            textTransform={"capitalize"}
            fontWeight={800}
            textAlign={"center"}
            gutterBottom
          >
            About Zaphs tours
          </Typography>
          <Typography variant="body2" textAlign={"center"} width={500}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            adipisci voluptate tempore veniam esse at sunt architecto incidunt
            mollitia doloremque ex magnam. Error, maxime? Consectetur vero
            libero quo dignissimos praesentium.
          </Typography>
        </Stack>
        <Grid container columns={2} pt={4}>
          <Grid size={1}>
            <Stack
              direction={"row"}
              justifyContent={"right"}
              alignItems={"center"}
              spacing={2}
            >
              <Box>
                {" "}
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign={"right"}
                >
                  Lorem, ipsum dolor.
                </Typography>
                <Typography textAlign={"right"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti tenetur, ullam perspiciatis nisi ipsam corporis.
                </Typography>
              </Box>
              <IconButton>
                <FlightIcon fontSize={"large"} color="primary" />
              </IconButton>
            </Stack>
          </Grid>

          <Grid size={1}>
            <Stack
              direction={"row"}
              justifyContent={"left"}
              alignItems={"center"}
              spacing={2}
            >
              <IconButton>
                <PaymentsRoundedIcon fontSize={"large"} color="secondary" />
              </IconButton>

              <Box>
                {" "}
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  textAlign={"left"}
                >
                  Lorem, ipsum dolor.
                </Typography>
                <Typography textAlign={"left"}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti tenetur, ullam perspiciatis nisi ipsam corporis.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
export default AboutUs;
