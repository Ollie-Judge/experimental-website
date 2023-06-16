import { Typography, Grid, Box } from "@mui/material";
import footerBackground from "../images/layered-waves-haikei.svg";
import "./style/footer.css";

function Footer() {
  return (
    <Box
      id="footerContainer"
      style={{
        width: "100%",
        margin: "auto",
        padding: "0",
      }}
      className="backgroundFooterColour"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{
          position: "relative",
          bottom: "0",
          background: "transparent",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            margin: "50px 25px auto",
            zindex: "2",
            position: "relative",
          }}
        >
          <Typography variant="h2">Footer</Typography>
        </Grid>

        <Grid item>
          <Typography style={{ zindex: "2", position: "relative" }}>
            Footer
          </Typography>
        </Grid>
        <img
          src={footerBackground}
          alt="footer background"
          style={{
            zindex: "-1",
            position: "absolute",
            width: "100%",
          }}
        ></img>
      </Grid>
    </Box>
  );
}

export default Footer;
