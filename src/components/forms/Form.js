import React from "react";
import PropTypes from "prop-types";

// Material UI Core
import TextField from "@material-ui/core/TextField"; //Best way to import! Better than destructuring
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const Form = props => {
  const classes = getStyles();
  return (
    <form className={classes.form} onSubmit={props.onSubmit}>
      <TextField
        label="Secret Ingredients"
        name="recipeName"
        className={classes.textField}
        margin="normal"
        onChange={e => props.onInputChange(e.target.value)}
        variant="outlined"
      />
      <Button variant="outlined" className={classes.button} type="submit">
        Search
      </Button>
    </form>
  );
};

export default Form;
