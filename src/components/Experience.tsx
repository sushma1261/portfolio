import { Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const list: Array<ExperienceProjects> = [
  { name: "Video Commerce", company: "Flipkart" },
  { name: "Chat Platform", company: "Flipkart" },
  { name: "Shopsy", company: "Flipkart" },
];
interface ExperienceProjects {
  name: string;
  company: string;
  startData?: string;
  endDate?: string;
  responsibilities?: string;
  location?: string;
}
const Experience = () => {
  return (
    <Box>
      Experience:
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {list.map((project: ExperienceProjects, index) => {
          return <Project key={index} project={project}></Project>;
        })}
      </div>
    </Box>
  );
};

const Project = ({ project }: { project: ExperienceProjects }) => {
  return (
    <Card style={{ margin: "8px", padding: "8px" }}>
      {/* <CardActionArea> */}
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
              {project.company}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {project.name}
            </Typography>
            <div style={{ display: "flex", justifyItems: "space-around" }}>
              <Typography gutterBottom variant="caption" component="div">
                Bangalore, India
              </Typography>
              <Typography gutterBottom variant="caption" component="div">
                22nd Jun, 2020 - 27th Aug, 2024
              </Typography>
            </div>
            <Typography gutterBottom variant="body1" component="div">
              Responsibilities
            </Typography>
          </div>
        </div>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>

    // <div
    //   style={{
    //     padding: 10,
    //     margin: 20,
    //     borderWidth: 1,
    //     borderColor: "CaptionText",
    //   }}
    // >
    //   <Box sx={{ m: "2rem", p: 5 }}>{project.name}</Box>
    // </div>
  );
};

export default Experience;
