import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  makeStyles
} from "@material-ui/core";

const getStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%" //16:9
  }
});
const RecipeCard = props => {
  const classes = getStyles();

  const { id, label, source, uri, image } = props;

  return (
    <Card key={id}>
      <CardMedia className={classes.media} image={image} label={label} />
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
