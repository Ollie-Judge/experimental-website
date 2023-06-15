import { Typography, Button, Grid, Box } from "@mui/material";
import "./style/header.css";

function Header() {
  return (
    <Box
      style={{ width: "100%", margin: "auto", padding: "0" }}
      className="backgroundHeaderColour"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} style={{ margin: "50px 25px auto" }}>
          <Typography variant="h2">Experimental Web Page</Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="subtitle1"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            This is a website to demonstrate my knowlege of making a pretty cool
            website
          </Typography>
          <Typography
            variant="h4"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            I think that this website is pretty cool
          </Typography>
          <Typography
            variant="body1"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            Do you?
          </Typography>
        </Grid>

        <Grid item xs={12} style={{ margin: "25px 50px" }}>
          <Button
            variant="outlined"
            style={{
              borderRadius: "25px",
            }}
          >
            Click here to express your satisfaction
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
