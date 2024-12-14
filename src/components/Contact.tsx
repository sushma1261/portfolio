import { Box, Typography } from "@mui/material";
function Contact() {
  return (
    <Box>
      <Box>
        <Typography variant="body1">
          Feel free to get in touch and let&apos;s have a discussion about how
          we can work together.
        </Typography>
        <Typography>Find me here</Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>LinkedIn</div>
          <div>Github</div>
          <div>Email</div>
        </div>
      </Box>
    </Box>
  );
}

export default Contact;
