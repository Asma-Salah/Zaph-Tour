import { Card, CardContent, CardMedia, Typography } from "@mui/material";
function FeatureDestinationCards({ image }: { image: string }) {
  return (
    <Card
      sx={{
        maxWidth: "20rem",
      }}
    >
      <CardMedia component={"img"} image={image} height={200} />
      <CardContent>
        <Typography variant="h6" fontWeight={600} color="primary">
          Lorem, ipsum.
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor, sbit amet consectetur adipisicing elit. Nemo,
          velit!
        </Typography>
      </CardContent>
    </Card>
  );
}
export default FeatureDestinationCards;
