document.body.style.backgroundColor = "silver";
document.getElementById("title").style.color = "green";

var h3Element = document.getElementsByTagName('h3');
for (var i = 0; i < h3Element.length; i++) {
  var element = h3Element[i];
  var text = element.textContent; 
  var uppercaseText = text.toUpperCase(); 
  element.textContent = uppercaseText; 
}

var fruitsList = document.getElementById("fruList");
var li = document.createElement("li");
li.textContent = "Kiwi";
fruitsList.appendChild(li);


var vegetablesList = document.getElementById("vegList");
var li = document.createElement("li");
li.textContent = "Cucumber";
vegetablesList.appendChild(li);