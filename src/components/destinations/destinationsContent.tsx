import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
  Box,
  Grid,
} from "@mui/material";
const destinationObj = [
  {
    Image:
      "https://www.discoverafrica.com/wp-content/uploads/2021/11/masai_mara-4.jpg",
    name: "Massai mara",
    description:
      "Rowling hills,sprawling savannahs,dramatic river crossing and of course..more wildlife and adventure than any movie could ever portray",
    link: "https://www.masaimara.com/",
    pricePerGroup: "$ 5,064 per group",
    individualCost: "$ 100 per person",
  },
  {
    Image:
      "https://www.amboseliparkkenya.com/wp-content/uploads/2022/05/Amboseli-National-Park-1-1.jpg",
    name: "Amboseli National Park",
    description: "more dramatic wildlife adventure than ever come with us",
    link: "https://www.masaimara.com/",
    pricePerGroup: "$ 100 per group",
    individualCost: "$ 50 per person",
  },
  {
    Image:
      "https://www.rwandawildlifesafari.com/wp-content/uploads/2021/04/Hell%E2%80%99s-Gate-National-Park.jpg",
    name: "Hell's Gate National Park",
    description:
      "an adventure to Hell’s Gate National Park is a once-in-a-lifetime experience you don’t want to miss",
    link: "",
    pricePerGroup: "$ 400 per group",
    individualCost: "$ 150 per person",
  },
  {
    Image:
      "https://www.kenyageographic.com/wp-content/uploads/2021/01/aberdare-national-park-karuru-falls.jpg",
    name: "Aberder ranges",
    description:
      "Aberdare National Park, a hidden gem nestled in Kenya’s central highlands",
    link: "https://www.africakenyasafaris.com/kenya-national-parks/aberdare-national-park/",
    pricePerGroup: "$ 230 per group",
    individualCost: "$ 40 per person",
  },
  {
    Image:
      "https://www.glamping-kenya.com/site/assets/files/6431/samburu_national_reserve-ofie9191.jpg",
    name: "Samburu national reserve",
    description:
      "The reserve has a rich and diverse collection of wildlife with an abundance of the Samburu Special Five animals",
    link: "https://www.samburureserve.com/photos-images.php",
    pricePerGroup: "$ 500 per group",
    individualCost: "$ 60 per person",
  },
  {
    Image:
      "https://senseearth.co.uk/wp-content/uploads/2023/03/Sailing_PeponiActivities8-scaled.jpg",
    name: "lamu island",
    description:
      "Lamu island is home to some wild species including hippos, hyenas, buffalo and lions as well as numerous donkeys",
    link: "https://mistersafari.com/lamu-island/",
    pricePerGroup: "$ 369 per group",
    individualCost: "$ 241 per person",
  },
  {
    Image:
      "https://www.tsavonationalparkkenya.com/wp-content/uploads/2022/01/diani-beach-safari.jpg",
    name: "Diani beach",
    description:
      "Incredible tropical paradise along the south coast of mombasa with white sand and water sports",
    link: "https://www.viator.com/Diani-Beach/d27403-ttd?m=33953&supag=1234752577649481&supsc=dat-2328971786433985&supai=77172167770158&supdv=c&supnt=nt:o&suplp=98&supli=142419&supti=dat-2328971786433985&tsem=true&supci=dat-2328971786433985&supkw=Diani%20Beach&&m=33953&supag=1234752577649481&supsc=dat-2328971786433985&supai=77172167770158&supdv=c&supnt=nt:o&suplp=98&supli=142419&supti=dat-2328971786433985&tsem=true&supci=dat-2328971786433985&supkw=Diani%20Beach&msclkid=c42e76159c831ab358731e789ec8e0cd&gclid=c42e76159c831ab358731e789ec8e0cd&gclsrc=3p.ds&gad_source=7",
    pricePerGroup: "$ 542 per Group",
    individualCost: "$ 321 per person",
  },
  {
    Image:
      "https://www.premiumafricasafaris.com/wp-content/uploads/2024/03/Lake-Naivasha-National-Park.jpg",
    name: "Lake Naivasha",
    description: "Lake Naivasha a popular destination for boat safaris",
    link: "https://www.dekstours.com/kenya-safaris/lake-naivasha-national-park/",
    pricePerGroup: "$ 123 per group",
    individualCost: "$ 120 per person",
  },
];
const DestinationsContent = () => {
  return (
    <Box py={6}>
      <Container>
        <Typography variant="h4" color="primary" mt={5} textAlign={"center"}>
          Breathtaking Destinations
        </Typography>
        <Grid container spacing={4} columns={3}>
          {destinationObj.map((destination, index) => (
            <Grid size={{ xs: 3, md: 1, sm: 1.5 }} key={index}>
              <Card sx={{ height: "100%", mb: 2 }}>
                <CardMedia
                  component={"img"}
                  height={230}
                  image={destination.Image}
                  alt="{destination.description}"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {destination.name}
                  </Typography>
                  <Typography variant="body2" mb={1}>
                    {destination.description}
                  </Typography>
                  <Typography
                    color="primary"
                    fontWeight={600}
                    sx={{ color: "secondary" }}
                  >
                    {destination.pricePerGroup}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="primary"
                    fontWeight={600}
                  >
                    {destination.individualCost}
                  </Typography>
                  <Box mt={1}>
                    <Button variant="contained" href="destination.link">
                      learn more
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default DestinationsContent;
