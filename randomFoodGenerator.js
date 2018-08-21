//build an array of cooking methods
var cooking = [
	"slow cooked",
  "barbequed",
  "boiled",
  "fried",
  "baked",
  "microwaved",
  "deep fried",
  "steamed"
];
//build an array of foods
var foods = [
	"noodle",
  "musubi",
  "steak",
  "pork",
  "carrot",
  "oreo",
  "bacon",
  "spaghetti",
  "egg",
  "ham",
  "baby back ribs",
  "ice cream",
  "chicken",
  "pizza",
  "cake",
  "fish",
  "tomato",
  "rice"
];
//concat the cooking method and the food based on a random sequence
var randCook = Math.floor(Math.random() * cooking.length);
var randFoods = Math.floor(Math.random() * foods.length);

window.alert(cooking[randCook] + " " + foods[randFoods]);