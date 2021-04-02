import React from "react";
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "../Assets/CSS/styles.css";
const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(2),
    width: theme.spacing(50),
  },
}));
const theme = createMuiTheme({
  typography: {
    fontFamily: "Baloo-Bhaina-2",
  },
});
const BaseInput = (props) => {
  const classes = useStyles();
  return (
    <div className="input-section">
      <ThemeProvider theme={theme}>
        <TextField
          id="filled-basic"
          label={props.label}
          type={props.type}
          variant="filled"
          className={classes.textField}
        />
      </ThemeProvider>
    </div>
  );
};
export default BaseInput;
