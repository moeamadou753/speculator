import React from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: 400 + theme.spacing(3) * 2,
    justifySelf: "normal",
    padding: "400px"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 120
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(20% + 4px)"
  },
})(Slider);

function ScrollBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="rating slider"
        defaultValue={10}
        orientation="vertical"
      />
    </div>
  );
}

export default ScrollBar;
