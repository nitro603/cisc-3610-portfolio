var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" }
];

var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// Set canvas dimensions based on fruit data
canvas.width = 500;
canvas.height = 250; // Adjusted for horizontal layout

// Calculate bar height and spacing
var barHeight = 20;
var barSpacing = 10;

// Draw each bar
for (var i = 0; i < fruit.length; i++) {
  var fruitData = fruit[i];
  var y = (barHeight + barSpacing) * i;
  var x = 50; // Adjust to control starting position
  var width = fruitData.quantity * 5; // Adjust 5 to control bar width
  var height = barHeight;

  ctx.fillStyle = fruitData.color;
  ctx.fillRect(x, y, width, height);

  // Write fruit name to the left of the bar
  ctx.fillStyle = "black";
  ctx.font = "12px Arial";
  ctx.fillText(fruitData.name, x - 10 - ctx.measureText(fruitData.name).width, y + height / 2 + 5); // Adjusted for horizontal alignment
}