import { namebgc } from "@/common/Colors";
import { ISection } from "@/common/Section";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ContactButtons } from "./Contact";
import Typewriter from "./TypeWriter";

const Home = ({ isVisible }: ISection) => {
  const strings = [
    "A passionate engineer!",
    "A full-stack developer!",
    "A Fast Learner!",
  ];
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isVisible]);
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
        <Typewriter strings={strings} isAnimating={isAnimating} />
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
