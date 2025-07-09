import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        bgcolor: "darkgray",
        color: "secondary",
        height: "10rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          p: "8",
        }}
      >
        <Typography variant={"h6"} textAlign={"center"}>
          Made with love in Kenya{" "}
        </Typography>
        <Typography variant="subtitle2" textAlign={"center"}>
          @copy Zaphs tours. All right reserved
        </Typography>
      </Container>
    </Box>
  );
}
export default Footer;
