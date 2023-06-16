import { Grid, Box } from "@mui/material";
import "./style/content.css";
import yellowContentBackground from "../images/blob-light-yellow-haikei.svg";

function yellowBlob() {
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
            src={yellowContentBackground}
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

export default yellowBlob;
