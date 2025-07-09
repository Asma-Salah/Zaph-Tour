import { Box, Typography } from "@mui/material";
function HeroSection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundImage:
          "url(https://wallpapers.com/images/hd/safari-background-f6hclg1r2mioelh0.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "60vh", md: "90vh" },
      }}
      height={"100vh"}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          height: "100%",
          color: "white",
        }}
      >
        <Typography
          variant={"h3"}
          textAlign={"center"}
          fontWeight={700}
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          }}
          color="primary"
          fontFamily={"milongo"}
        >
          TRAVEL
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          width={"40rem"}
          color="primary"
          fontFamily={"milongo"}
          sx={{
            fontSize: { xs: "2rem", md: "1.3rem" },
            mb: "3",
          }}
          fontWeight={"600"}
        >
          Enjoying wild animals in their natural environment is just one way to
          enhance your experience of seeing the world you live in.
        </Typography>
      </Box>
    </Box>
  );
}
export default HeroSection;
