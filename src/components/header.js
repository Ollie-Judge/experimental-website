import { Typography, Button, Grid, Box } from "@mui/material";
import "./style/header.css";

function Header() {
  const removeButton = () => {
    let headerButton = document.getElementById("headerButton");
    headerButton.remove();

    let textLocation = document.createElement("Typography");
    let node = document.createTextNode("You made a great decission");
    textLocation.appendChild(node);
    let addText = document.getElementById("buttonContainer");
    addText.appendChild(textLocation);
  };
  return (
    <Box
      style={{ width: "100%", margin: "auto", padding: "0" }}
      className="backgroundHeaderColour"
    >
      <Grid container direction="column" alignItems="center">
        <Grid item xs={12} style={{ margin: "50px 25px auto" }}>
          <Typography id="title" variant="h2">
            Experimental Web Page
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            id="subtitle"
            variant="subtitle1"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            This is a website to demonstrate my knowlege of making a pretty cool
            website
          </Typography>
          <Typography
            id="subtitle2"
            variant="h4"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            I think that this website is pretty cool
          </Typography>
          <Typography
            id="subtitle3"
            variant="body1"
            className="headerText"
            style={{ margin: "15px auto" }}
          >
            Do you?
          </Typography>
        </Grid>

        <Grid item xs={12} id="buttonContainer" style={{ margin: "25px 50px" }}>
          <Button
            id="headerButton"
            variant="outlined"
            style={{
              borderRadius: "25px",
            }}
            onClick={removeButton}
          >
            Click here to express your satisfaction
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
