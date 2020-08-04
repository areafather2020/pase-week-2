alert("Ensure all fields are field");

function validate() {
  var userV = document.forms["myForm"]["fname"]["pass"].value;
  if (userV == null || userV == "") {
    prompt("Fill all fields");
    return false;
  }
}
