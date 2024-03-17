const locat = document.querySelector("div.time-z");
const updateTimes = function () {
    const output = locat.querySelector("p");
    const now = luxon.DateTime.now();
    output.innerHTML = now.toFormat("hh:mm:ss a");
}
updateTimes();
setInterval(function () {
    updateTimes();
}, 1000);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("mydiv"));

let comparComputer = 0;
var button2 = document.getElementById("myComputer");
var div2 = document.getElementById("mydiv");

// Add event listener to the button
button2.addEventListener("click", function() {
    // Change the display property of the div
    div2.style.display = "block";
    div2.style.position = 'absolute';
    comparComputer = 1;
});

var div3 = document.getElementById("startwindow");
div3.classList.toggle("hidden");
document.getElementById("start_button").addEventListener("click", function() {
  if (div3.classList.contains("hidden")){
    div3.classList.remove("hidden");
  } else {
    div3.classList.add("hidden");
  }
});

dragElement(document.getElementById("myContact"));

let comparContact = 0;
var button3 = document.getElementById("contact-icon");
var div10 = document.getElementById("myContact");

// Add event listener to the button
button3.addEventListener("click", function() {
    // Change the display property of the div
    div10.style.display = 'block'
    div10.style.position = 'absolute';
    comparContact = 1
});

var button4 = document.getElementById("close");
button4.addEventListener("click", function() {
  // Change the display property of the div
  mydiv.style.display = "none";
});

var button5 = document.getElementById("closed");
button5.addEventListener("click", function() {
	// Change the display property of the div
	myContact.style.display = "none";
  });
  