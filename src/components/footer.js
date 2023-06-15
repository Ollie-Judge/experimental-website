import { Typography, Grid, Box } from "@mui/material";
import "./style/footer.css";

function Footer() {
  return (
    <Box
      id="footerContainer"
      style={{
        width: "100%",
        margin: "auto",
        padding: "0",
        backgroundImage: "./images/layered-waves-haikei.svg",
      }}
      className="backgroundFooterColour"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} style={{ margin: "50px 25px auto" }}>
          <Typography variant="h2">Footer</Typography>
        </Grid>

        <Grid item>
          <Typography>Footer</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
