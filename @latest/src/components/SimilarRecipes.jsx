import React, { useState, useEffect } from "react";
import { fetchAboutSimilarRecipes } from "../services/spoonacularAPI";
import { useParams } from "react-router-dom";

const SimilarRecipes = () => {
  const { id } = useParams();
  const [similarRecipes, setSimilarRecipes] = useState([
    {
      id: 209128,
      title: "Dinner Tonight: Grilled Romesco-Style Pork",
      imageType: "jpg",
      readyInMinutes: 45,
      servings: 4,
      sourceUrl:
        "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html",
    },
    {
      id: 31868,
      title: "Dinner Tonight: Chickpea Bruschetta",
      imageType: "jpg",
      readyInMinutes: 45,
      servings: 2,
      sourceUrl:
        "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html",
    },
  ]);

  // useEffect(() => {
  //   if (id) {
  //     fetchAboutSimilarRecipes(id, 3)
  //       .then((data) => {
  //         setSimilarRecipes(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching similar recipes:", error);
  //       });
  //   }
  // }, [id]);

  return (
    <div className="m-10 lg:absolute right-[20vh] top-[13vh] ">
      <h2 className="font-bold">Similar Recipes</h2>
      <ul>
        {similarRecipes.map((recipe) => (
          <li key={recipe.id} className="leading-[7vh]">
            <a href={`/about/${recipe.id}`} rel="noopener noreferrer">
              {recipe.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarRecipes;
