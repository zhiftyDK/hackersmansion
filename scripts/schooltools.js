const input = document.getElementById("chemeuqation");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("chemeuqationbutton").click();
  }
});