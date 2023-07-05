window.onload = init;

function init() {
  var button = document.getElementById("add_button");
  button.onclick = createSticky;

  var stickiesArray = getStickiesArray();

  for (var i = 0; i < stickiesArray.length; i++) {
    var key = stickiesArray[i];
    var value = localStorage[key];
    addStickyToDOM(key, value);
  }
}

function getStickiesArray() {
  var stickiesArray = localStorage.getItem("stickiesArray");
  if (!stickiesArray) {
    stickiesArray = [];
    localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));
  } else {
    stickiesArray = JSON.parse(stickiesArray);
  }
  return stickiesArray;
}

function addStickyToDOM(key, value) {
  var stickies = document.getElementById("stickies");
  var sticky = document.createElement("li");
  sticky.setAttribute("id", key);
  var span = document.createElement("span");
  span.setAttribute("class", "sticky");
  span.innerHTML = value;
  sticky.appendChild(span);
  stickies.appendChild(sticky);
  sticky.onclick = deleteSticky;
}

function createSticky() {
  var stickiesArray = getStickiesArray();
  var currentDate = new Date();
  var key = "sticky_" + currentDate.getTime();
  var value = document.getElementById("note_text").value;

  localStorage.setItem(key, value);
  stickiesArray.push(key);
  localStorage.setItem("stickiesArray", JSON.stringify(stickiesArray));

  addStickyToDOM(key, value);
}

