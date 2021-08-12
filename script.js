
//Fact generator
var factList = [ 
  "About 30,000 species per year — about three per hour — are being driven to extinction.",
  "Wildlife habitat is being destroyed at a rate of approximately 5,760 acres per day or 240 acres per hour.",
  "From 1970 and 2010, the population of wildlife  decreased in size by approximately 52 percent.",
  " 4 % of the mammals in the world are wild animals. ",
  "An average of 96 elephants are killed in Africa each day for their ivory.",
  "The population of lions in Africa decrease for about 42 percent in the last two decades.",
  "Around 6000 tigers are kept as household pets, which is more than the amount in the wild around the world."];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);


function displayFact () {
  fact.innerHTML = factList [count];
  count ++;
  if (count == factList.length){
    count = 0;
  }
  
}
