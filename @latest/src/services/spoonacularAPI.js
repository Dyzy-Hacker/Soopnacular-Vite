import axios from "axios";

// const API_KEY = "f2404eb7a2e44169937bd5f67210dcc1";

const spoonacularAPI = axios.create({
  baseURL: "https://api.spoonacular.com",
});

export const fetchRecipesByIngredients = async (ingredients, number) => {
  try {
    const response = await spoonacularAPI.get("/recipes/findByIngredients", {
      params: {
        ingredients: ingredients.join(","),
        number: number,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchAboutInfo = async (recipeId) => {
  // console.log(recipeId);
  try {
    const response = await spoonacularAPI.get(
      `/recipes/${recipeId}/information`,
      {
        params: {
          includeNutrition: false,
          apiKey: API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching about info:", error);
    throw error;
  }
};

export const fetchAboutSimilarRecipes = async (id, number = 1) => {
  try {
    const response = await spoonacularAPI.get(`/recipes/${id}/similar`, {
      params: {
        number: number,
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching similar recipes:", error);
    throw error;
  }
};

// http://localhost:5173/recipes/1234

// export const fetchAboutInfo = async () => {
//   try {
//     const response = await spoonacularAPI.get("/recipes/123/information", {
//       params: {
//         includeNutrition: false,
//         apiKey: API_KEY,
//       },
//     });
//     console.log(response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching about info:", error);
//     throw error;
//   }
// };
