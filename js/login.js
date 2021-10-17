//Button that opens the modal
var btn = document.getElementById("modalBtn");
// THE MODAL LOGINFORM
var modal = document.getElementById("modalbg");
// Get the CLOSE (X) element that closes the modal
var span = document.getElementsByClassName("closebtn")[0];
// When user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When user clicks on (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When  user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}