import { Box, Grid, Stack, Typography } from "@mui/material";
import FeatureDestinationCards from "./FeatureDestinationCards";
function FeatureDestination() {
  return (
    <Box>
      <Typography variant="h4" textAlign={"center"} fontWeight={900} mb={2}>
        Feature Destinations
      </Typography>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid>
          <FeatureDestinationCards image="https://tse1.mm.bing.net/th/id/OIP.JN1ZAZOC8az8u2WqhKcCawHaDd?pid=Api&P=0&h=220" />
        </Grid>
        <Grid>
          <FeatureDestinationCards image="https://tse3.mm.bing.net/th/id/OIP.lau3-ZuK18lj2rNm9PD2jgAAAA?pid=Api&P=0&h=220" />
        </Grid>
        <Grid>
          <FeatureDestinationCards image="https://tse4.mm.bing.net/th/id/OIP.hzmNTIQQjcX_1l9BLck45AHaE1?pid=Api&P=0&h=220" />
        </Grid>
        <Grid>
          <FeatureDestinationCards image="https://tse1.mm.bing.net/th/id/OIP.t-CBs76Adw4VMuF6SV_hsQHaE8?pid=Api&P=0&h=220" />
        </Grid>
        <Grid>
          <FeatureDestinationCards image="https://tse2.mm.bing.net/th/id/OIP.c-j_qHHBoSjKlkOs5BdWywHaJ4?pid=Api&P=0&h=220" />
        </Grid>
        <Grid>
          <FeatureDestinationCards image="https://tse4.mm.bing.net/th/id/OIP.jp8f1HqdnBuIQFU520s1dwHaFj?pid=Api&P=0&h=220" />
        </Grid>
      </Grid>
    </Box>
  );
}
export default FeatureDestination;
