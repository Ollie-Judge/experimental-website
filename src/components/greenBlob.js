import { Grid, Box } from "@mui/material";
import "./style/content.css";
import greenContentBackground from "../images/blob-green-haikei.svg";

function greenBlob() {
  return (
    <Box
      id="contentContainer"
      style={{
        zindex: "-1",
        width: "100%",
        margin: "auto",
        padding: "0",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ color: "#7ece94" }}
      >
        <Grid item xs={12}>
          <img
            src={greenContentBackground}
            alt="footer background"
            style={{
              zindex: "-1",
              width: "100%",
            }}
          ></img>
        </Grid>
      </Grid>
    </Box>
  );
}

export default greenBlob;
