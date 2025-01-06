import { Box } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
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
    responsibilityDetails:
      "Developed the Video Commerce UI using React Native to support live streaming and offer product discounts to users who engaged with the videos. Integrated reward management system APIs to allocate rewards based on user interactions, improving user retention and engagement.",
  },
  {
    name: "Chat Platform",
    company: "Flipkart",
    startData: "Jun 2020",
    endDate: "May 2024",
    location: "Bangalore, India",
    role: "Software Development Engineer",
    responsibilityDetails: `Idiom and Dialog Manager
· Developed Idiom from scratch, a conversational design tool using ReactJS and Java, enabling designers to define
user flows and journeys, and improved its performance by 6 times.
· Led end-to-end development of bot simulation framework to validate behavior in real-world scenarios, enabling
comprehensive testing across environments.
· Designed and built a version-control feature in the Idiom tool, enabling users to manage, track, and revert to
previous versions seamlessly.
· Implemented the Decision Assistant bot, using Java SpringBoot and DropWizard frameworks, to help users
make informed purchases by integrating Flipkart services for real-time product data and facilitate a smooth
transfer to an agent when the bot was unable to address user queries.
· Migrated 10 micro-services from VMs to cloud and ensured 85% test coverage by implementing quality control
gates in production code, while also handling on-call responsibilities.
- Harvey
· Developed a tool for business, product, and development teams to analyze chats, ensuring seamless integration
of front-end and back-end components. Streamlined end-to-end service deployments by optimizing CI/CD
pipelines, resulting in a 35% reduction in deployment time and handled on-call responsibilities.
- Flipkart App
· Collaborated cross-functionally with the Product team to develop and enhance the front-end of a chat messaging
interface on Flipkart, using HTTP and Web Socket connections and implemented interactive UI components to
boost user engagement, support informed product decisions, and deliver seamless customer support experiences.`,
  },
  {
    name: "Shopsy",
    company: "Flipkart",
    startData: "Apr 2021",
    endDate: "Jun 2021",
    location: "Bangalore, India",
    role: "UI Engineer",
    responsibilityDetails: `Developed an earnings dashboard and various UI screens for the app’s initial launch in June 2021, contributing to
a successful launch and providing users with valuable insights into their earnings
- Integrated App with branch.io for user engagement and Mo-engage for push notification and other analytic
features.`,
  },
];
interface ExperienceProjects {
  name: string;
  company: string;
  startData: string;
  endDate: string;
  responsibilityDetails?: string;
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
  const {
    startData,
    endDate,
    company,
    name,
    location,
    role,
    responsibilityDetails,
  } = project;
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
            <Accordion style={{ border: 0 }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography gutterBottom variant="body2" component="div">
                  Responsibilities
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{responsibilityDetails}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
