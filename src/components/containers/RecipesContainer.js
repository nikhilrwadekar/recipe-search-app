import React, { Component } from "react";
import Form from "../forms/Form";
import Recipes from "../layout/Recipes";
import { getRecipes } from "../../config/api";

export default class RecipesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeName: "",
      recipes: [],
      isLoading: false
    };
  }

  fetchRecipes = e => {
    const { recipeName } = this.state;

    e.preventDefault();
    this.setState({ isLoading: true });

    getRecipes(recipeName).then(recipes => {
      this.setState({
        recipes,
        isLoading: false
      });
    });
  };
  handleInputChange = recipeName => {
    console.log("Recipe Name", recipeName);
    this.setState({
      recipeName
    });
  };

  render() {
    const { recipes } = this.state;

    return (
      <>
        <Form
          onInputChange={this.handleInputChange}
          onSubmit={this.fetchRecipes}
        />
        <Recipes recipes={recipes} />
      </>
    );
  }
}
