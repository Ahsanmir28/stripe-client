import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import Youtube from "../Assets/Images/youtube.png";

const useStyles = makeStyles({
  component: {
    margin: 50,
    "& > *": {
      marginTop: 50,
    },
  },
  image: {
    width: "50%",
    height: "50%",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Typography variant="h4">Home Page</Typography>
      <Box style={{ display: "flex" }}>
        <img src={Youtube} className={classes.image} />
      </Box>
    </Box>
  );
};

export default Home;
