let comparMusic = 0;
var musicbutton = document.getElementById("myMusic");
var mdiv = document.getElementById("musicdiv");

// Add event listener to the button
musicbutton.addEventListener("click", function() {
    // Change the display property of the div
    mdiv.style.display = "block";
    mdiv.style.position = 'absolute';
    comparMusic = 1;
});
