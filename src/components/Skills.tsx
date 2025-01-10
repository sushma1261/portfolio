import { Box, Typography } from "@mui/material";

interface SkillSectionProps {
  title: string;
  skills: string[];
}
const skills = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python", "JavaScript", "Swift"],
  },
  {
    title: "Web and Mobile Technologies",
    skills: [
      "ReactJS",
      "ReactNative",
      "JavaScript",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
      "Node.js",
      "Next.js",
      "Express.js",
      "Android",
      "iOS",
      "JSON",
      "HTTP",
      "WebSocket",
    ],
  },
  {
    title: "Build Automation Tools",
    skills: ["Jenkins", "Maven", "Gradle", "Webpack", "Vite", "NPM"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Github",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "Operating Systems",
    skills: ["MacOS", "Windows", "Linux"],
  },
  {
    title: "Software Methodologies",
    skills: ["Agile", "Waterfall", "TDD", "Jira"],
  },
  {
    title: "Other Technologies and Frameworks",
    skills: [
      "IoT",
      "JUnit",
      "Jest",
      "Dropwizard",
      "Spring Boot",
      "Machine Learning",
      "Material UI",
    ],
  },
];
const Skills = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        color="white"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        Skills
      </Typography>
      {skills.map((skill) => (
        <SkillSection key={skill.title} {...skill} />
      ))}
    </Box>
  );
};

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div
      style={{
        minWidth: "60vw",
        maxWidth: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 12,
        marginBottom: 12,
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        borderRadius: 4,
      }}
    >
      <div>
        <Typography variant="h6">{title}</Typography>
      </div>
      <div>
        {skills.map((skill, idx) => (
          <span key={idx} style={{ marginLeft: 8 }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
