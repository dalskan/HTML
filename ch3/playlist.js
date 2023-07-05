window.onload = init;

function init() {
	var addButton = document.getElementById("addButton");
	addButton.onclick = handleButtonClick;
    var clearButton= document.getElementById("clearbutton")
    clearButton.onclick = handleClearButtonClick;
    loadPlaylist();
}

function handleButtonClick() {
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.value;


var li = document.createElement("li");
    li.innerHTML = songName;
var ul = document.getElementById("playlist");
    ul.appendChild(li);

    save(songName);
    clearall(songName);
}

function handleClearButtonClick(){
    clear();
}

