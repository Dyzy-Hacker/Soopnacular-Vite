import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../images/Ico.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const [recipes, setRecipes] = useState([
  //   {
  //     id: 73420,
  //     image: "https://img.spoonacular.com/recipes/73420-312x231.jpg",
  //     imageType: "jpg",
  //     likes: 0,
  //     missedIngredientCount: 3,
  //     missedIngredients: [
  //       {
  //         aisle: "Baking",
  //         amount: 1.0,
  //         id: 18371,
  //         image:
  //           "https://img.spoonacular.com/ingredients_100x100/white-powder.jpg",
  //         meta: [],
  //         name: "baking powder",
  //         original: "1 tsp baking powder",
  //         originalName: "baking powder",
  //         unit: "tsp",
  //         unitLong: "teaspoon",
  //         unitShort: "tsp",
  //       },
  //       {
  //         aisle: "Spices and Seasonings",
  //         amount: 1.0,
  //         id: 2010,
  //         image: "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg",
  //         meta: [],
  //         name: "cinnamon",
  //         original: "1 tsp cinnamon",
  //         originalName: "cinnamon",
  //         unit: "tsp",
  //         unitLong: "teaspoon",
  //         unitShort: "tsp",
  //       },
  //       {
  //         aisle: "Milk, Eggs, Other Dairy",
  //         amount: 1.0,
  //         id: 1123,
  //         image: "https://img.spoonacular.com/ingredients_100x100/egg.png",
  //         meta: [],
  //         name: "egg",
  //         original: "1 egg",
  //         originalName: "egg",
  //         unit: "",
  //         unitLong: "",
  //         unitShort: "",
  //       },
  //     ],
  //     title: "Apple Or Peach Strudel",
  //     unusedIngredients: [],
  //     usedIngredientCount: 1,
  //     usedIngredients: [
  //       {
  //         aisle: "Produce",
  //         amount: 6.0,
  //         id: 9003,
  //         image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
  //         meta: [],
  //         name: "apples",
  //         original: "6 large baking apples",
  //         originalName: "baking apples",
  //         unit: "large",
  //         unitLong: "larges",
  //         unitShort: "large",
  //       },
  //     ],
  //   },
  //   {
  //     id: 632660,
  //     image: "https://img.spoonacular.com/recipes/632660-312x231.jpg",
  //     imageType: "jpg",
  //     likes: 3,
  //     missedIngredientCount: 4,
  //     missedIngredients: [
  //       {
  //         aisle: "Milk, Eggs, Other Dairy",
  //         amount: 1.5,
  //         extendedName: "unsalted butter",
  //         id: 1001,
  //         image:
  //           "https://img.spoonacular.com/ingredients_100x100/butter-sliced.jpg",
  //         meta: ["unsalted", "cold"],
  //         name: "butter",
  //         original: "1 1/2 sticks cold unsalted butter cold unsalted butter<",
  //         originalName: "cold unsalted butter cold unsalted butter<",
  //         unit: "sticks",
  //         unitLong: "sticks",
  //         unitShort: "sticks",
  //       },
  //       {
  //         aisle: "Produce",
  //         amount: 4.0,
  //         id: 1079003,
  //         image:
  //           "https://img.spoonacular.com/ingredients_100x100/red-delicious-apples.png",
  //         meta: [
  //           "red",
  //           " such as golden delicious, peeled, cored and cut into 1/4-inch-thick slices ",
  //         ],
  //         name: "red apples",
  //         original:
  //           "4 larges red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
  //         originalName:
  //           "s red apples, such as Golden Delicious, peeled, cored and cut into 1/4-inch-thick slices",
  //         unit: "large",
  //         unitLong: "larges",
  //         unitShort: "large",
  //       },
  //       {
  //         aisle: "Spices and Seasonings",
  //         amount: 2.0,
  //         id: 2010,
  //         image: "https://img.spoonacular.com/ingredients_100x100/cinnamon.jpg",
  //         meta: [],
  //         name: "cinnamon",
  //         original: "2 teaspoons cinnamon",
  //         originalName: "cinnamon",
  //         unit: "teaspoons",
  //         unitLong: "teaspoons",
  //         unitShort: "tsp",
  //       },
  //       {
  //         aisle: "Nut butters, Jams, and Honey",
  //         amount: 2.0,
  //         id: 19719,
  //         image:
  //           "https://img.spoonacular.com/ingredients_100x100/apricot-jam.jpg",
  //         meta: ["melted"],
  //         name: "apricot preserves",
  //         original: "2 tablespoons apricot preserves, melted and strained",
  //         originalName: "apricot preserves, melted and strained",
  //         unit: "tablespoons",
  //         unitLong: "tablespoons",
  //         unitShort: "Tbsp",
  //       },
  //     ],
  //     title: "Apricot Glazed Apple Tart",
  //     unusedIngredients: [
  //       {
  //         aisle: "Produce",
  //         amount: 1.0,
  //         id: 9003,
  //         image: "https://img.spoonacular.com/ingredients_100x100/apple.jpg",
  //         meta: [],
  //         name: "apples",
  //         original: "apples",
  //         originalName: "apples",
  //         unit: "serving",
  //         unitLong: "serving",
  //         unitShort: "serving",
  //       },
  //     ],
  //     usedIngredientCount: 0,
  //     usedIngredients: [],
  //   },
  // ]);

  return (
    <div>
      <div className="bg-cosutm_yellow p-2"></div>
      <nav className="bg-white border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={icon} alt="icon" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Spoonacular
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0;">
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-cosutm_yellow" : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              {/* {recipes.map((recipe) => (
                <li>
                  <NavLink
                    onClick={toggleMenu}
                    to={`/about/${recipe.id}`}
                    className={({ isActive }) =>
                      isActive ? "text-cosutm_yellow" : "text-black"
                    }
                  >
                    About
                  </NavLink>
                </li>
              ))} */}

              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-cosutm_yellow" : "text-black"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive ? "text-cosutm_yellow" : "text-black"
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={toggleMenu}
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-cosutm_yellow" : "text-black"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
