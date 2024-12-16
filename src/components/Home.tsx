import { Typography } from "@mui/material";
import Typewriter from "./TypeWriter";

const Home = () => {
  const strings = [
    "A passionate engineer!",
    "A full-stack developer!",
    "A Fast Learner!",
  ];

  return (
    <div>
      <Typography variant="h2">I am Sushma Manthena</Typography>
      <Typewriter strings={strings} />
    </div>
  );
};

export default Home;
