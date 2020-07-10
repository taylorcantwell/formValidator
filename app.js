//grabbing html elements
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

// show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// submit button event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkUsername(username);
  checkPasswords(password, password2);
  checkEmail(email);
});

// check input length
function checkUsername(input) {
  if (input.value === "") {
    showError(input, "Username has not been entered.");
  } else if (input.value.length < 6) {
    showError(input, "Username must be at least 6 characters");
  } else if (input.value.length > 15) {
    showError(input, "Username must be less than 15 characters");
  } else {
    showSuccess(input);
  }
}

//check regular expresion of email
function checkEmail(input) {
  let regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value === "") {
    showError(input, "An email was not entered");
  } else if (regularExpression.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//check passwords match
function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input1, "Passwords do not match.");
    showError(input2, "Passwords do not match.");
  } else if (input1.value === "" && input2.value === "") {
    showError(input1, "Password is empty.");
    showError(input2, "Password is empty.");
  } else if (input1.value.length < 6 || input2.value.length < 6) {
    showError(input1, "Password must be at least 6 characters.");
    showError(input2, "Password must be at least 6 characters.");
  } else if (input1.value.length > 25 || input2.value.length > 25) {
    showError(input1, "Password must be less than 25 characters.");
    showError(input2, "Password must be less than 25 characters.");
  } else if (input1.value !== "" && input2.value === "") {
    showError(input1, "Password was not repeated!");
    showError(input2, "Password was not repeated!");
  } else {
    showSuccess(input1);
    showSuccess(input2);
  }
}
