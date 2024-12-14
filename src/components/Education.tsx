import { Box } from "@mui/material";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const list: Array<EducationDetails> = [
  { name: "University of Washington", degree: "Master's" },
  {
    name: "Shri Vishnu Engineering College for Women(A)",
    degree: "Bachelor's",
  },
];
interface EducationDetails {
  name: string;
  degree: string;
  major?: string;
  startData?: string;
  endDate?: string;
  location?: string;
}
const Education = () => {
  return (
    <Box>
      Education:
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {list.map((project: EducationDetails, index) => {
          return <SchoolDetails key={index} project={project}></SchoolDetails>;
        })}
      </div>
    </Box>
  );
};

const SchoolDetails = ({ project }: { project: EducationDetails }) => {
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
              {project.degree}
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

export default Education;
