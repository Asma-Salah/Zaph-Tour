import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function NewsLetter() {
  return (
    <Box mt={19} mb={2}>
      <Typography variant="h4" textAlign={"center"} fontWeight={600}>
        SignUp
      </Typography>
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent={"center"}
        mt={"2rem"}
        alignItems={"center"}
      >
        <Grid>
          <Card
            sx={{
              maxwidth: "800rem",
              // backgroundColor: "#f90000",
              p: 4,
              textAlign: "center",
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                fontWeight={600}
                color="primary"
                textAlign={"center"}
                mt={2}
              >
                NEWSLETTER
              </Typography>
              <Typography variant="body2" textAlign={"center"} mt={2} mb={2}>
                Stay upto date with our latest news DON'T MISS US IN OUR
                ADVENTURES
              </Typography>
              <Stack direction={"row"} spacing={2} mt={"4"}>
                <TextField
                  variant="outlined"
                  placeholder="Enter your Email Address"
                  fullWidth
                  size="small"
                  sx={{ borderRadius: 2, mt: 5 }}
                />
                <Button variant="contained" sx={{ bgcolor: "secondary" }}>
                  Subscribe
                </Button>
              </Stack>
              <Typography mt={7}>
                Your Email is save with us, we don't spam
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default NewsLetter;
