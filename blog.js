var button= document.getElementById("enter")
var input= document.getElementById("userinput");
var ul= document.getElementById("up");

function inputLength() {
	return input.value.length;
}

function newList() {
		var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}

function addListAfterClick(){
	if (inputLength() > 0) {
		newList();
	}
}

function addItemAfterPress(event) {
	if (inputLength() > 0 && event.keycode === 13) {
		newList()
	}
}


button.addEventListener("click",addListAfterClick);

button.addEventListener("keypress", addItemAfterPress);

var list=document.getElementsByTagName("li");
for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click",liClick)
}

function liClick(){
	this.classList.toggle("done")
}