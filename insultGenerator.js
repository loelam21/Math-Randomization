//create an array of adjectives or adverbs
var adj = [
	"funny",
  "evil",
  "happy"
];
//ask person for their name
var name = prompt("Enter your name");
//generate a random number
var randNum = (Math.floor(Math.random() * adj.length));
//let the user know what kind of person they are, for example,
	//username followed or preceded by the array item.
window.alert(adj[randNum] + " " + name);