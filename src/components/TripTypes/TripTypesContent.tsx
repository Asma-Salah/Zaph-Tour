import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
const tripObj = [
  {
    title: "Honeymoon",
    description:
      "perfect for couples , come and enjoy nature best medicine ever",
    Image:
      "https://tse2.mm.bing.net/th/id/OIP.vMC0uZsJyWFwHEk-wUPw_AHaDu?pid=Api&P=0&h=220",
    price: "$5,000",
    offer: "20% off for couples",
  },
  {
    title: "Family and Relatives ",
    description:
      "The joy of world family if you care family bond this is the perfect space for it !! ENJOY",
    Image:
      "https://tse2.mm.bing.net/th/id/OIP.jRtNMhvIkyBC6l5sUUWeqgHaEJ?pid=Api&P=0&h=220",
    price: "$3,000",
    offer: "10% off for fami.li and relatives",
  },
  {
    title: "wildlife Safari",
    description:
      "Exploring worldlife world is just expierience worthy while! how amazing it is to check on another species",
    Image:
      "https://tse2.mm.bing.net/th/id/OIP.HGzJaxq3wbSs2pUuM0mEwAHaEK?pid=Api&P=0&h=220",
    price: "$1,000",
    offer: "free entry on friday evening",
  },
  {
    title: "Luxury vacation",
    description:
      "Exploring worldlife world is just expierience worthy while! how amazing it is to check on another species",
    Image:
      "https://tse3.mm.bing.net/th/id/OIP.ZwSGSuKws282oDiYzwQvagHaEK?pid=Api&P=0&h=220",
    price: "$1,000",
    offer: "free entry on friday evening",
  },
  {
    title: "Beach Holiday",
    description:
      "Exploring worldlife world is just expierience worthy while! how amazing it is to check on another species",
    Image:
      "https://tse3.mm.bing.net/th/id/OIP.k3RMUc5AGoCXLWAfDzLucwHaEg?pid=Api&P=0&h=220",
    price: "$1,000",
    offer: "free entry on friday evening",
  },
  {
    title: "Cultural Tour",
    description:
      "Exploring worldlife world is just expierience worthy while! how amazing it is to check on another species",
    Image:
      "https://tse1.mm.bing.net/th/id/OIP.plWb3PA_9waiDEfpny2MfwHaE8?pid=Api&P=0&h=220",
    price: "$1,000",
    offer: "free entry on friday evening",
  },
];

function TripTypesContent() {
  return (
    <Box py={6}>
      <Container sx={{ justifyContent: "center", mb: "3" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          mt={4}
          mb={3}
          textAlign={"center"}
        >
          Our Trip Types
        </Typography>

        <Grid container spacing={4} columns={3} mb={5}>
          {tripObj.map((trip, index) => (
            <Grid size={{ xs: 3, md: 1, sm: 1.5 }} key={index}>
              <Card sx={{ height: "100%", mb: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={trip.Image}
                  alt="{trip.title}"
                />

                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {trip.title}
                  </Typography>
                  <Typography variant="body2" mb={1}>
                    {trip.description}
                  </Typography>
                  <Typography color="primary" fontWeight={600}>
                    {trip.price}
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {trip.offer}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
export default TripTypesContent;
