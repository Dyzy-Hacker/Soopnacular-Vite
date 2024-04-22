import Donut from "../images/Donut.png";
import Cereal from "../images/Cereal.png";
import Cookies from "../images/Cookies.png";

const descriptions = [
  {
    id: 1,
    name: "Donut",
    icon: Donut,
    heading: "Donut",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate itaque neque",
    description: [
      "Lorem1 ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque",
      "asperiores eligendi veritatis voluptate unde in minima, perspiciatis",
      "dolorum minus voluptas quae ad earum impedit iste labore odio esse aut!",
    ],
    ingredients: [
      "2 ¼ teaspoons (1 packet) active dry yeast",
      "1 cup warm milk (around 110°F or 45°C)",
      "⅓ cup granulated sugar",
      "2 large eggs, beaten",
      "½ cup unsalted butter, melted",
      "1 teaspoon vanilla extract",
      "½ teaspoon salt",
      "4 cups all-purpose flour, plus more for dusting",
      "Oil for frying (vegetable, canola, or peanut oil works well)",
      "Optional toppings: powdered sugar, cinnamon sugar, glaze, chocolate ganache, sprinkles, etc.",
    ],
    methodOfpreparation: [
      "1. Activate yeast by mixing with warm milk.",
      "2. Combine wet ingredients: sugar, eggs, melted butter, vanilla, salt.",
      "3. Mix in yeast mixture, then gradually add flour until dough forms.",
      "4. Knead dough, let rise for 1-2 hours.",
      "5. Roll out dough, cut into shapes, let rise again.",
      "6. Fry in oil at 350°F (175°C) until golden brown.",
      "7. Drain excess oil on paper towels.",
      "8. Add toppings like powdered sugar or glaze.",
      "9. Enjoy your homemade donuts!",
    ],
    additionalInformation: [
      "Yeast Activation: Ensure that the milk is warmed to around 110°F (45°C) to activate the yeast ",
      "effectively. Too hot, and it can kill the yeast; too cold, and it won't activate properly.",
    ],
  },
  {
    id: 2,
    name: "Cereal",
    icon: Cereal,
    heading: "Cereal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate itaque neque",
    description: [
      "Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque",
      "asperiores eligendi veritatis voluptate unde in minima, perspiciatis",
      "dolorum minus voluptas quae ad earum impedit iste labore odio esse aut!",
    ],
    ingredients: [
      "Whole grains (e.g., wheat, oats, corn)",
      "Sugar or sweeteners (e.g., cane sugar, honey, maple syrup)",
      "Salt",
      "Flavorings (e.g., vanilla, cinnamon)",
      "Nuts (optional)",
      "Dried fruits (optional)",
      "Chocolate chips (optional)",
    ],

    methodOfpreparation: [
      "1. Gather Ingredients: Collect whole grains, sugar, salt, flavorings, and any optional additions like nuts or dried fruits.",
      "2. Mix Dry Ingredients: Combine the grains, sugar, salt, and any other dry ingredients in a bowl.",
      "3. Add Flavorings: Mix in flavorings like vanilla extract or cinnamon.",
    ],
    additionalInformation: [
      "Whole Grain Options: Experiment with different whole grains like oats, barley, quinoa, or brown",
      "rice to create unique cereal blends with varying textures and flavors.",
    ],
  },
  {
    id: 3,
    name: "Cookies",
    icon: Cookies,
    heading: "Cookies",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptate itaque neque",
    description: [
      "Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Tempora neque",
      "asperiores eligendi veritatis voluptate unde in minima, perspiciatis",
      "dolorum minus voluptas quae ad earum impedit iste labore odio esse aut!",
    ],
    ingredients: [
      "2 ¼ cups all-purpose flour",
      "1 cup granulated sugar",
      "1/2 cup brown sugar",
      "1 cup unsalted butter, softened",
      "2 large eggs",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1 teaspoon vanilla extract",
    ],
    methodOfpreparation: [
      "1. Preheat Oven: Preheat your oven to 350°F (175°C). Line baking sheets with parchment paper or lightly grease them.",
      "2. Cream Butter and Sugars: In a large mixing bowl, cream together 1 cup of softened unsalted butter,",
      "3. Add Eggs and Vanilla: Beat in 2 large eggs, one at a time, until well combined. Then, mix in 1 teaspoon of vanilla extract.",
    ],
    additionalInformation: [
      "Room Temperature Ingredients: Ensure that your butter and eggs are at room temperature",
      "before beginning. This helps the ingredients mix together more easily and evenly.",
      "Chill the Dough: For thicker cookies with a better texture, consider chilling the dough in the ",
      "refrigerator for at least 30 minutes before baking. This helps prevent excessive spreading during baking.",
    ],
  },
];

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: "#",
    price: { monthly: "$15", annually: "$12" },
    description: "Everything necessary to get started.",
    features: [
      "5 Ingredients",
      "Up to 1,000 recipes",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Essential",
    id: "tier-essential",
    href: "#",
    price: { monthly: "$30", annually: "$24" },
    description: "Everything in Basic, plus essential tools",
    features: [
      "25 Ingredients",
      "Up to 10,000 recipes",
      "Advanced analytics",
      "24-hour support response time",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    price: { monthly: "$60", annually: "$48" },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited Ingredients",
      "Unlimited recipes",
      "Advanced analytics",
      "1-hour, dedicated support response time",
    ],
  },
];

const cardData = [
  {
    name: "HTML",
    title: "Markup Language",
    description:
      "HTML is a markup language that describe the structure of web pages",
  },
  {
    name: "CSS",
    title: "Styling Language",
    description:
      "CSS is a Style sheet language which is used to describe the look and formatting of a document written in markup language.",
  },
  {
    name: "JAVASCRIPT",
    title: "Programming Language",
    description:
      "Javascript is a programming language that adds interactivity to web pages",
  },
  {
    name: "REACT",
    title: "Javascript Library",
    description:
      "React is a JavaScript-based UI development library for building user interfaces based on components.",
  },
];

export { descriptions, tiers, cardData };
