import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="white"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        About me
      </Typography>
      <div style={{ marginTop: "32px" }}>
        <Typography variant="body1" color="white">
          I’m a Full Stack Developer with over 4 years of experience building
          scalable and user-centric applications. I specialize in front-end
          development using ReactJS and have extensive experience in back-end
          development with Java. I enjoy solving real-world problems through
          efficient and elegant code. <br />
          <br />
          At Flipkart, I worked on projects that enhanced user engagement, such
          as pioneering Video Commerce UI using React Native and developing
          tools that improved testing efficiency. I’ve also migrated services to
          the cloud using Docker and Kubernetes, showcasing my skills in
          scalability and deployment. <br />
          <br />
          Currently, I’m pursuing my Master’s in Computer Science at University
          of Washington Bothell, exploring areas like machine learning, iOS app
          development, and advanced problem-solving. <br />
          <br />
          I’m passionate about collaborating with diverse teams, staying updated
          on the latest technologies, and creating tools that make life simpler.
          <br />
          <br />
          Let’s build something amazing together!
        </Typography>
      </div>
    </Box>
  );
};

export default About;
