import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import FeatureDestination from "./FeatureDestination";
import Testimonials from "./Testimonials";
import NewsLetter from "./NewsLetter";

function Home() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroSection />
      <AboutUs />
      <FeatureDestination />
      <Testimonials />
      <NewsLetter />
    </Box>
  );
}
export default Home;
