import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchRecipesByIngredients } from "../services/spoonacularAPI";
import { descriptions } from "../constant";

const Hero = () => {
  const [recipes, setRecipes] = useState([
    {
      id: 73420,
      image: "https://img.spoonacular.com/recipes/73420-312x231.jpg",
      imageType: "jpg",
      likes: 0,
      missedIngredientCount: 3,
      missedIngredients: [
        {
          aisle: "Baking",
          amount: 1.0,
          id: 18371,
          image:
            "https://img.spoonacular.com/ingredients_100x100/white-powder.jpg",
          meta: [],
          name: "baking powder",
          original: "1 tsp baking powder",
          originalName: "baking powder",
          unit: "tsp",
          unitLong: "teaspoon",
          unitShort: "tsp",
        },
        {
          aisle: "Spices and Seasonings",
          amount: 1.0,
          id: 2010,
          image: "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg",
          meta: [],
          name: "cinnamon",
          original: "1 tsp cinnamon",
          originalName: "cinnamon",
          unit: "tsp",
          unitLong: "teaspoon",
          unitShort: "tsp",
        },
        {
          aisle: "Milk, Eggs, Other Dairy",
          amount: 1.0,
          id: 1123,
          image: "https://img.spoonacular.com/ingredients_100x100/egg.png",
          meta: [],
          name: "egg",
          original: "1 egg",
          originalName: "egg",
          unit: "",
          unitLong: "",
          unitShort: "",
        },
      ],
      title: "Apple Or Peach Strudel",
      unusedIngredients: [],
      usedIngredientCount: 1,
      usedIngredients: [
        {
          aisle: "Produce",
          amount: 6.0,
          id: 9003,
          image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
          meta: [],
          name: "apples",
          original: "6 large baking apples",
          originalName: "baking apples",
          unit: "large",
          unitLong: "larges",
          unitShort: "large",
        },
      ],
    },
    {
      id: 632660,
      image: "https://img.spoonacular.com/recipes/632660-312x231.jpg",
      imageType: "jpg",
      likes: 3,
      missedIngredientCount: 4,
      missedIngredients: [
        {
          aisle: "Milk, Eggs, Other Dairy",
          amount: 1.5,
          extendedName: "unsalted butter",
          id: 1001,
          image:
            "https://img.spoonacular.com/ingredients_100x100/butter-sliced.jpg",
          meta: ["unsalted", "cold"],
          name: "butter",
          original: "1 1/2 sticks cold unsalted butter cold unsalted butter<",
          originalName: "cold unsalted butter cold unsalted butter<",
          unit: "sticks",
          unitLong: "sticks",
          unitShort: "sticks",
        },
        {
          aisle: "Produce",
          amount: 4.0,
          id: 1079003,
          image:
            "https://img.spoonacular.com/ingredients_100x100/red-delicious-apples.png",
          meta: [
            "red",
            " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices ",
          ],
          name: "red apples",
          original:
            "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
          originalName:
            "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
          unit: "large",
          unitLong: "larges",
          unitShort: "large",
        },
        {
          aisle: "Spices and Seasonings",
          amount: 2.0,
          id: 2010,
          image: "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg",
          meta: [],
          name: "cinnamon",
          original: "2 teaspoons cinnamon",
          originalName: "cinnamon",
          unit: "teaspoons",
          unitLong: "teaspoons",
          unitShort: "tsp",
        },
        {
          aisle: "Nut butters, Jams, and Honey",
          amount: 2.0,
          id: 19719,
          image:
            "https://img.spoonacular.com/ingredients_100x100/apricot-jam.jpg",
          meta: ["melted"],
          name: "apricot preserves",
          original: "2 tablespoons apricot preserves, melted and strained",
          originalName: "apricot preserves, melted and strained",
          unit: "tablespoons",
          unitLong: "tablespoons",
          unitShort: "Tbsp",
        },
      ],
      title: "Apricot Glazed Apple Tart",
      unusedIngredients: [
        {
          aisle: "Produce",
          amount: 1.0,
          id: 9003,
          image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
          meta: [],
          name: "apples",
          original: "apples",
          originalName: "apples",
          unit: "serving",
          unitLong: "serving",
          unitShort: "serving",
        },
      ],
      usedIngredientCount: 0,
      usedIngredients: [],
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipeIngredients, setSelectedRecipeIngredients] =
    useState(null);
  const inputRef = useRef(null);

  // useEffect(() => {
  //   const fetchRecipesContainer = async () => {
  //     try {
  //       const ingredientsContainer = ["apples", "flour", "sugar"];
  //       const numberContainer = 3;
  //       const fetchRecipesContainer = await fetchRecipesByIngredients(
  //         ingredientsContainer,
  //         numberContainer
  //       );
  //       setRecipes(fetchRecipesContainer);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchRecipesContainer();
  // }, []);

  const searchForRecipe = async () => {
    try {
      const number = 3; // Broj na recepti so gi citame na ekran
      const fetchedRecipes = await fetchRecipesByIngredients(
        searchQuery.split(","), // Querito se deili so zapirka na sostojkite
        number
      );
      setRecipes(fetchedRecipes);
    } catch (error) {
      console.error("Error searching for recipes:", error);
    }
  };
  // Koga ke stegnime na Search ke ni dade img od vnesenite sostojki
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Ova e funkcija za koga na Click na img ke ne nosi na About ovde trebit da se sredit!!!
  const handleRecipeClick = (recipe) => {
    setSelectedRecipeIngredients(recipe.ingredients);
  };

  return (
    <div>
      <div className="bg-overlay">
        <h1 className="text-5xl text-white font-semibold">Spoonacular</h1>
      </div>
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center gap-6 h-full pt-10"></div>
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-6 w-72">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-yellow-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-cosutm_yellow focus:border-yellow-500"
                ref={inputRef}
                placeholder=""
                value={searchQuery}
                onChange={handleInputChange}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-yellow-400 peer-focus:text-yellow-500 before:border-yellow-200 peer-focus:before:!border-yellow-500 after:border-yellow-200 peer-focus:after:!border-yellow-500">
                Spoonacular
              </label>
            </div>
          </div>
          <button
            onClick={searchForRecipe}
            type="button"
            className="text-white bg-cosutm_yellow hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 ml-10"
          >
            Search
          </button>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the Ingredients
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                className="flex flex-col items-start justify-between"
              >
                <Link to={`/about/${recipe.id}`} key={recipe.id}>
                  <div className="relative w-full">
                    <img
                      src={recipe.image}
                      alt=""
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                      onClick={() => handleRecipeClick(recipe)}
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </Link>
                <div className="max-w-xl">
                  <div className="group relative ">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {recipe.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {recipe.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="card-container mt-[100px] ">
          <h1 className="text-4xl font-bold text-center m-5">
            Recent Recepies
          </h1>
          {descriptions.map((description) => (
            <div className="card" key={description.id}>
              <div className="card-header">
                <img src={description.icon} alt="Nice image" />
              </div>
              <div className="card-body bg-costum_white">
                <h1 className="text-4xl font-semibold mt-10 ml-10">
                  {description.heading}
                </h1>
                <p className="text-lg p-10">{description.text}</p>
                <Link
                  className="bg-cosutm_yellow rounded-full font-semibold ml-10 p-2"
                  to={`/info/${description.name}`}
                >
                  See Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
