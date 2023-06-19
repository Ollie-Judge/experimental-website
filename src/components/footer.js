import { Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import footerBackground from "../images/layered-waves-haikei.svg";
import "./style/footer.css";

function Footer() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{
        width: "100%",
        margin: "auto",
        padding: "0",
        position: "relative",
        bottom: "0",
        background: "transparent",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          bottom: "-200px",
          zindex: "2",
          position: "relative",
        }}
      >
        <FontAwesomeIcon icon={faCoffee} />
      </Grid>

      <Grid container>
        <Grid
          item
          spacing={3}
          style={{
            zindex: "2",
            margin: "auto",
            position: "relative",
            bottom: "-200px",
          }}
        >
          <Typography>Footer</Typography>
        </Grid>

        <Grid
          item
          spacing={3}
          style={{
            margin: "auto",
            zindex: "2",
            position: "relative",
            bottom: "-200px",
          }}
        >
          <Typography>Footer</Typography>
        </Grid>

        <Grid
          item
          spacing={3}
          style={{
            margin: "auto",
            zindex: "2",
            position: "relative",
            bottom: "-200px",
          }}
        >
          <Typography>Footer</Typography>
        </Grid>
      </Grid>
      <img
        src={footerBackground}
        alt="footer background"
        style={{
          zindex: "-1",
          width: "100%",
        }}
      ></img>
    </Grid>
  );
}

export default Footer;
