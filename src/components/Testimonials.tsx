import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

function Testimonials() {
  return (
    <Box justifyContent={"center"} alignItems={"center"}>
      <Typography variant="h4" textAlign={"center"} fontWeight={900} mt={5}>
        Testimonials
      </Typography>
      <Grid
        container
        direction="row"
        columns={3}
        spacing={3}
        justifyContent={"center"}
        mt={"2rem"}
      >
        <Grid size={{ xs: 3, md: 1, sm: 1.5 }} justifyContent={"center"}>
          <Card sx={{ maxWidth: "20rem", p: 2 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://tse3.mm.bing.net/th/id/OIP.G51H9p0cgmg3x0znnlO0dgHaGW?pid=Api&P=0&h=220"
              sx={{ width: 44, height: 44 }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary">
                Remy Sharp
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor set consectetur adipisicing elit. Dolor, ab.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ex?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 3, md: 1, sm: 1.5 }} justifyContent={"center"}>
          <Card sx={{ maxWidth: "20rem", p: 2 }}>
            <Avatar
              alt="Cindy Baker"
              src="https://tse2.mm.bing.net/th/id/OIP.4gTf3rPL53ihJ4QdiP8FzwHaJ4?pid=Api&P=0&h=220"
              sx={{ width: 44, height: 44 }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary">
                Cindy Baker
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor set consectetur adipisicing elit. Dolor, Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Odio,
                provident!
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 3, md: 1, sm: 1.5 }} justifyContent={"center"}>
          <Card sx={{ maxWidth: "20rem", p: 2 }}>
            <Avatar
              alt="Travis Howard"
              src="https://tse1.mm.bing.net/th/id/OIP.0e7061UKlop7fOOzCAJejgHaJh?pid=Api&P=0&h=220"
              sx={{ width: 44, height: 44 }}
            />
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary">
                Travis Howard
              </Typography>
              <Typography variant="body2">
                Lorem ipsum dolor set consectetur adipisicing elit. Dolor, ab.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, eos?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Testimonials;
