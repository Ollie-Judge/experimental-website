import { Typography, Grid, Box } from "@mui/material";
import "./style/content.css";

function Content() {
  return (
    <Box
      id="contentContainer"
      style={{
        zindex: "-1",
        width: "100%",
        background: "#FF6D60",
        margin: "auto",
        padding: "0",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>

          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>

          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
          <Typography type="h4" className="contentWords">
            content
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;
