import { namebgc } from "@/assets/Colors";
import { Typography } from "@mui/material";
import { ContactButtons } from "./Contact";
import Typewriter from "./TypeWriter";

const Home = () => {
  const strings = [
    "A passionate engineer!",
    "A full-stack developer!",
    "A Fast Learner!",
  ];

  return (
    <div>
      <span>
        <Typography
          variant="h2"
          style={{ textShadow: "2px 2px 2px black", color: "white" }}
          fontWeight={"400"}
        >
          Hello, I am{" "}
          <span
            style={{
              backgroundColor: namebgc,
              paddingLeft: "4px",
              paddingRight: "4px",
            }}
          >
            Sushma Manthena
          </span>
        </Typography>
      </span>
      <div style={{ marginTop: "16px", marginBottom: "20px" }}>
        <Typewriter strings={strings} />
      </div>
      <Typography variant="body1" color="white">
        Self-motivated, proactive, and deeply passionate about coding, with a
        natural curiosity for tackling complex and challenging problems in the
        real world.
      </Typography>
      <ContactButtons />
    </div>
  );
};

export default Home;
