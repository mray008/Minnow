const regex1 = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,16}$");
const regex2 = new RegExp("^[\\x21-\\x7E]+$");

//const regex1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,16}$/;
//const regex2 = /^[\x20-\x7E]+$/;

function displayPasswordRequirements() {
  const frontMessage = "This is where you will type your new password.\n"+
  "Please enter it twice, and see that it follows these requirements:\n";
  const rule1 = "- It has at least one uppercase letter (A-Z) and one lowercase letter (a-z).\n";
  const rule2 = "- It has at least one number (0-9) and a special character (#, %, etc.).\n";
  const rule3 = "- It is between 8 and 16 characters long, inclusive.\n";
  const rule4 = "- It contains only printable ASCII characters (no spaces, what you see on a standard keyboard).\n";
return frontMessage + rule1 + rule2 + rule3 + rule4;
}   
function passwordMatch(password1, password2) {
  if (password1 == password2) {
    return true;
  } else {
    return false;
  }
}

function isValidPassword(password) {
  return regex1.test(password) && regex2.test(password);
}

function validatePassword(password1, password2) {
  if (!passwordMatch(password1, password2)) {
    return "Passwords do not match. One of them must be mystyped.";
  }
  if (!isValidPassword(password1)) {
    return "Sorry, but your new password does not meet the requirements.\n" +
      "Please try again.\n\n" +
      displayPasswordRequirements();
  }
  return null; // no errors
}

export { validatePassword, displayPasswordRequirements, isValidPassword };