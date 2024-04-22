import React, { useState, useEffect } from "react";
import { fetchAboutInfo } from "../services/spoonacularAPI";
import { useParams } from "react-router-dom";
import "../index.css";
import SimilarRecipes from "../components/SimilarRecipes";

const About = () => {
  const { id } = useParams(); // zemame po id ruta
  // null trebit da sedit fo useState!!
  const [recipeInfo, setRecipeInfo] = useState({ 
    "id": 716429,
    "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    "image": "https://img.spoonacular.com/recipes/716429-556x370.jpg",
    "imageType": "jpg",
    "servings": 2,
    "readyInMinutes": 45,
    "license": "CC BY-SA 3.0",
    "sourceName": "Full Belly Sisters",
    "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    "healthScore": 19.0,
    "spoonacularScore": 83.0,
    "pricePerServing": 163.15,
    "analyzedInstructions": [],
    "cheap": false,
    "creditsText": "Full Belly Sisters",
    "cuisines": [],
    "dairyFree": false,
    "diets": [],
    "gaps": "no",
    "glutenFree": false,
    "instructions": "",
    "ketogenic": false,
    "lowFodmap": false,
    "occasions": [],
    "sustainable": false,
    "vegan": false,
    "vegetarian": false,
    "veryHealthy": false,
    "veryPopular": false,
    "whole30": false,
    "weightWatcherSmartPoints": 17,
    "dishTypes": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    "extendedIngredients": [
        {
            "aisle": "Milk, Eggs, Other Dairy",
            "amount": 1.0,
            "consitency": "solid",
            "id": 1001,
            "image": "butter-sliced.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "butter",
            "original": "1 tbsp butter",
            "originalName": "butter",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 2.0,
            "consitency": "solid",
            "id": 10011135,
            "image": "cauliflower.jpg",
            "measures": {
                "metric": {
                    "amount": 473.176,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "frozen",
                "thawed",
                "cut into bite-sized pieces"
            ],
            "name": "cauliflower florets",
            "original": "about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "originalName": "about frozen cauliflower florets, thawed, cut into bite-sized pieces",
            "unit": "cups"
        },
        {
            "aisle": "Cheese",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1041009,
            "image": "cheddar-cheese.png",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "grated",
                "(I used romano)"
            ],
            "name": "cheese",
            "original": "2 tbsp grated cheese (I used romano)",
            "originalName": "grated cheese (I used romano)",
            "unit": "tbsp"
        },
        {
            "aisle": "Oil, Vinegar, Salad Dressing",
            "amount": 1.0,
            "consitency": "liquid",
            "id": 1034053,
            "image": "olive-oil.jpg",
            "measures": {
                "metric": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                },
                "us": {
                    "amount": 1.0,
                    "unitLong": "Tbsp",
                    "unitShort": "Tbsp"
                }
            },
            "meta": [],
            "name": "extra virgin olive oil",
            "original": "1-2 tbsp extra virgin olive oil",
            "originalName": "extra virgin olive oil",
            "unit": "tbsp"
        },
        {
            "aisle": "Produce",
            "amount": 5.0,
            "consitency": "solid",
            "id": 11215,
            "image": "garlic.jpg",
            "measures": {
                "metric": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                },
                "us": {
                    "amount": 5.0,
                    "unitLong": "cloves",
                    "unitShort": "cloves"
                }
            },
            "meta": [],
            "name": "garlic",
            "original": "5-6 cloves garlic",
            "originalName": "garlic",
            "unit": "cloves"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 6.0,
            "consitency": "solid",
            "id": 20420,
            "image": "fusilli.jpg",
            "measures": {
                "metric": {
                    "amount": 170.097,
                    "unitLong": "grams",
                    "unitShort": "g"
                },
                "us": {
                    "amount": 6.0,
                    "unitLong": "ounces",
                    "unitShort": "oz"
                }
            },
            "meta": [
                "(I used linguine)"
            ],
            "name": "pasta",
            "original": "6-8 ounces pasta (I used linguine)",
            "originalName": "pasta (I used linguine)",
            "unit": "ounces"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1032009,
            "image": "red-pepper-flakes.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "pinches",
                    "unitShort": "pinches"
                }
            },
            "meta": [
                "red"
            ],
            "name": "red pepper flakes",
            "original": "couple of pinches red pepper flakes, optional",
            "originalName": "couple of red pepper flakes, optional",
            "unit": "pinches"
        },
        {
            "aisle": "Spices and Seasonings",
            "amount": 2.0,
            "consitency": "solid",
            "id": 1102047,
            "image": "salt-and-pepper.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "servings",
                    "unitShort": "servings"
                }
            },
            "meta": [
                "to taste"
            ],
            "name": "salt and pepper",
            "original": "salt and pepper, to taste",
            "originalName": "salt and pepper, to taste",
            "unit": "servings"
        },
        {
            "aisle": "Produce",
            "amount": 3.0,
            "consitency": "solid",
            "id": 11291,
            "image": "spring-onions.jpg",
            "measures": {
                "metric": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                },
                "us": {
                    "amount": 3.0,
                    "unitLong": "",
                    "unitShort": ""
                }
            },
            "meta": [
                "white",
                "green",
                "separated",
                "chopped"
            ],
            "name": "scallions",
            "original": "3 scallions, chopped, white and green parts separated",
            "originalName": "scallions, chopped, white and green parts separated",
            "unit": ""
        },
        {
            "aisle": "Alcoholic Beverages",
            "amount": 2.0,
            "consitency": "liquid",
            "id": 14106,
            "image": "white-wine.jpg",
            "measures": {
                "metric": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                },
                "us": {
                    "amount": 2.0,
                    "unitLong": "Tbsps",
                    "unitShort": "Tbsps"
                }
            },
            "meta": [
                "white"
            ],
            "name": "white wine",
            "original": "2-3 tbsp white wine",
            "originalName": "white wine",
            "unit": "tbsp"
        },
        {
            "aisle": "Pasta and Rice",
            "amount": 0.25,
            "consitency": "solid",
            "id": 99025,
            "image": "breadcrumbs.jpg",
            "measures": {
                "metric": {
                    "amount": 59.147,
                    "unitLong": "milliliters",
                    "unitShort": "ml"
                },
                "us": {
                    "amount": 0.25,
                    "unitLong": "cups",
                    "unitShort": "cups"
                }
            },
            "meta": [
                "whole wheat",
                "(I used panko)"
            ],
            "name": "whole wheat bread crumbs",
            "original": "1/4 cup whole wheat bread crumbs (I used panko)",
            "originalName": "whole wheat bread crumbs (I used panko)",
            "unit": "cup"
        }
    ],
    "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    "winePairing": {
        "pairedWines": [
            "chardonnay",
            "gruener veltliner",
            "sauvignon blanc"
        ],
        "pairingText": "Chardonnay, Gruener Veltliner, and Sauvignon Blanc are great choices for Pasta. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. The Buddha Kat Winery Chardonnay with a 4 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches": [
            {
                "id": 469199,
                "title": "Buddha Kat Winery Chardonnay",
                "description": "We barrel ferment our Chardonnay and age it in a mix of Oak and Stainless. Giving this light bodied wine modest oak character, a delicate floral aroma, and a warming finish.",
                "price": "$25.0",
                "imageUrl": "https://spoonacular.com/productImages/469199-312x231.jpg",
                "averageRating": 0.8,
                "ratingCount": 1.0,
                "score": 0.55,
                "link": "https://www.amazon.com/2015-Buddha-Kat-Winery-Chardonnay/dp/B00OSAVVM4?tag=spoonacular-20"
            }
        ]
    }
});

  // useEffect(() => {
  //   const fetchAboutRecipe = async () => {
  //     try {
  //       const response = await fetchAboutInfo(id); // zemi recipe information vrz id
  //       setRecipeInfo(response);
  //     } catch (error) {
  //       console.error("Error fetching about info:", error);
  //     }
  //   };

  //   fetchAboutRecipe();
  // }, [id]);

  return (
    <div>
      {recipeInfo && (
        <div className="">
          <h1 className="text-start font-semibold m-10">{recipeInfo.title}</h1>
          <img
            src={recipeInfo.image}
            alt={recipeInfo.title}
            className="w-[50vh] h-[50vh] sm:m-10"
          />
          <ul className="m-10">
            {recipeInfo.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
          <SimilarRecipes/>
        </div>
      )}
    </div>
  );
};

export default About;

// import React, { useState, useEffect } from "react";
// import { fetchAboutInfo } from "../services/spoonacularAPI";
// import "../index.css";

// const About = ({ recipeId }) => {
//   const [recipeInfo, setRecipeInfo] = useState(null);

//   useEffect(() => {
//     const fetchAboutRecipe = async () => {
//       try {
//         const response = await fetchAboutInfo(recipeId); // Pass the recipeId here
//         setRecipeInfo(response);
//       } catch (error) {
//         console.error("Error fetching about info:", error);
//       }
//     };

//     // Call the fetchAboutRecipe function
//     fetchAboutRecipe();
//   }, [recipeId]); // Add recipeId to the dependency array if it's coming from props or state

//   let backgroundImageUrl = "";

//   if (recipeInfo) {
//     backgroundImageUrl = `url(${recipeInfo.image})`;
//   }

//   return (
//     <div
//       className="bg-overlay-about"
//       style={{ backgroundImage: backgroundImageUrl }}
//     >
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
//             {/* Recipe Ingredients */}
//           </h2>
//         </div>
//         {/* Podolu go Citame API na ekran gi zemame potrebnite parametri */}
//         {recipeInfo ? (
//           <div className="bg-white bg-opacity-80 p-8 rounded-lg">
//             <ul>
//               {recipeInfo.extendedIngredients.map((ingredient, index) => (
//                 <li key={index}>{ingredient.original}</li>
//               ))}
//             </ul>
//           </div>
//         ) : (
//           // Ako API ne rabotat se aktivirat Spinner Loader !!!

//           <div role="status" className="mx-auto max-w-max m-5 ">
//             <svg
//               aria-hidden="true"
//               className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-400"
//               viewBox="0 0 100 101"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                 fill="currentColor"
//               />
//               <path
//                 d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                 fill="currentFill"
//               />
//             </svg>
//           </div>

//           // <div className="flex">
//           //   <div>
//           //     <img src={four} className="mr-[200px]" />
//           //   </div>
//           //   <div>
//           //     <img src={Cookie500} alt="Cookie" />
//           //   </div>
//           //   <div>
//           //     <img src={four} className="mr-[200px]" />
//           //   </div>
//           // </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default About;
