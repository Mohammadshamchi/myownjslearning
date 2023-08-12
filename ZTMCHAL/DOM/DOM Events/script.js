var button = document.getElementById("addTasksBtn");
var input = document.getElementById("addTasks");
var ul = document.querySelector("ul");

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }
}
function addListAfterKeyPress(event) {
  if (input.value.length > 0 && event.key === "Enter") {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
//  The Second Parts ( addListAfterClick,addListAfterKeyPress) Start Running Automaticly
// which means they don't need to add parantecies ()
