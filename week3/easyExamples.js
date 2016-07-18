var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
//===================================================
function myFunction() {
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits;
}
//====================================================
function myFunction() {
  var text = "";
  var i;
  for (i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}
