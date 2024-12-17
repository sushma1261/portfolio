import { Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const list: Array<ExperienceProjects> = [
  {
    name: "Video Commerce",
    company: "Flipkart",
    startData: "May 2024",
    endDate: "Aug 2024",
    location: "Bangalore, India",
    role: "UI Engineer",
  },
  {
    name: "Chat Platform",
    company: "Flipkart",
    startData: "Jun 2020",
    endDate: "May 2024",
    location: "Bangalore, India",
    role: "Software Development Engineer",
  },
  {
    name: "Shopsy",
    company: "Flipkart",
    startData: "Apr 2021",
    endDate: "Jun 2021",
    location: "Bangalore, India",
    role: "UI Engineer",
  },
];
interface ExperienceProjects {
  name: string;
  company: string;
  startData: string;
  endDate: string;
  responsibilities?: string;
  location: string;
  role: string;
}
const Experience = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="white"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        Experience
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "24px",
        }}
      >
        {list.map((project: ExperienceProjects, index) => {
          return <Project key={index} project={project} />;
        })}
      </div>
    </Box>
  );
};

const Project = ({ project }: { project: ExperienceProjects }) => {
  const { startData, endDate, company, name, location, role } = project;
  return (
    <Card style={{ margin: "8px", padding: "8px" }}>
      <CardContent>
        <div style={{ display: "flex" }}>
          <div style={{ alignSelf: "center", justifyContent: "center" }}>
            <Image
              src="/flipkart-logo.png"
              width={50}
              height={50}
              alt="Flipkart logo"
            />
          </div>
          <div
            style={{
              marginLeft: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {role}
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="span">
              {company}-
              <Typography gutterBottom variant="subtitle2" component="span">
                {name}
              </Typography>
            </Typography>
            <div
              style={{
                display: "flex",
                // justifyContent: "space-between",
              }}
            >
              <Typography gutterBottom variant="caption" component="div">
                {location}
              </Typography>
              <Typography gutterBottom variant="caption" component="div">
                {"->"} {startData}-{endDate}
              </Typography>
            </div>
            <Typography gutterBottom variant="body2" component="div">
              Responsibilities
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
