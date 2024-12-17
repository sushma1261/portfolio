import EmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Button, Typography } from "@mui/material";
function Contact() {
  return (
    <Box>
      <Typography
        variant="h4"
        color="white"
        style={{ textShadow: "1px 1px 2px black" }}
      >
        Contact
      </Typography>
      <div style={{ marginTop: "32px" }}>
        <Typography variant="body1" color="white">
          Feel free to get in touch and let&apos;s have a discussion about how
          we can work together.
        </Typography>
      </div>
      <ContactButtons />
    </Box>
  );
}

export const ContactButtons = () => {
  const iconStyle = { marginRight: "4px" };
  const buttonStyle = {
    padding: "4px",
    marginRight: "24px",
    color: "white",
    paddingRight: "8px",
    paddingLeft: "8px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <Button
        variant="contained"
        size="large"
        color="error"
        style={buttonStyle}
        href="mailto:varma.sushma1998@gmail.com"
        startIcon={<EmailIcon style={iconStyle} />}
      >
        Email
      </Button>
      <Button
        variant="contained"
        size="large"
        style={buttonStyle}
        href="https://www.linkedin.com/in/sushma-varma/"
        startIcon={<LinkedInIcon style={iconStyle} />}
      >
        LinkedIn
      </Button>
      <Button
        variant="contained"
        size="large"
        style={{ ...buttonStyle, backgroundColor: "black" }}
        href="https://github.com/sushma1261"
        startIcon={<GitHubIcon style={iconStyle} />}
      >
        Github
      </Button>
    </div>
  );
};

export default Contact;
