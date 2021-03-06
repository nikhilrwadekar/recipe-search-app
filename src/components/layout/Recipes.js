import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeCard from "./RecipeCard";

const getStyles = makeStyles({
  root: {
    margin: "5em 0"
  }
});

const Recipes = props => {
  const classes = getStyles();
  const getRecipeIdFromUrl = uri => {
    const array = uri.split("#");
    const id = array[array.length - 1];
    return id;
  };
  return (
    <div className="container">
      <Grid container className={classes.root} spacing={5}>
        {props.recipes.map(recipe => {
          const { label, image, source, uri } = recipe.recipe;

          return (
            <Grid item xs={3}>
              <RecipeCard
                key={getRecipeIdFromUrl(uri)}
                label={label}
                image={image}
                source={source}
                uri={uri}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Recipes;
