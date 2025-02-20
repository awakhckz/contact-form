// // Variables

" USE STRICT!";

const form = document.getElementById("form");

const firstNameErr = document.querySelector(".first-error");
const lastNameErr = document.querySelector(".last-error");
const emailErr = document.querySelector(".mailerr");
const queryErr = document.querySelector(".queryerr");
const consentErr = document.querySelector(".consent-err");
const textErr = document.querySelector(".messageerr");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form));
  let valid = true;

  const invalidMail = "#$%^&*(_+)='/}]{[";
  const emailInput = formData.email || ""; // Safely access email

  // Checking first name validity
  if (!formData.firstName) {
    firstNameErr.innerText = "This field is required";
    firstNameErr.style.display = "block";
    valid = false;
  } else {
    firstNameErr.style.display = "none";
  }

  // Checking last name validity
  if (!formData.lastName) {
    lastNameErr.innerText = "This field is required";
    lastNameErr.style.display = "block";
    valid = false;
  } else {
    lastNameErr.style.display = "none";
  }

  // Checking Email Validity
  if (!emailInput) {
    emailErr.innerText = "Please input a valid email";
    emailErr.style.display = "block";
    valid = false;
  } else {
    for (let char of invalidMail) {
      if (emailInput.includes(char)) {
        emailErr.innerText = "Please input a valid email";
        emailErr.style.display = "block";
        valid = false;
        break; // Exit loop if invalid character is found
      } else {
        emailErr.style.display = "none";
      }
    }
  }

  // Checking Query Type

  const queryOptions = document.querySelectorAll('input[name="query"]');
  const querySelected = Array.from(queryOptions).some(option => option.checked);

  if (!querySelected) {
    queryErr.innerText = "Please select a query type";
    queryErr.style.display = "block";
    valid = false;
  } else {
    queryErr.style.display = "none";
  }

  // Checking Consent Checkbox
  if (!formData.checkbox) {
    consentErr.innerText =
      "To submit this form, please consent to be contacted";
    consentErr.style.display = "block";
    valid = false;
  } else {
    consentErr.style.display = "none";
  }

  // Checking Textarea
  if (!formData.textarea) {
    textErr.innerText = "This field is required";
    textErr.style.color = "red";
    textErr.style.display = "block";
    valid = false;
  } else {
    textErr.style.display = "none";
  }

  // If form is not valid
  if (!valid) {
    return; // Stop form submission
  }
});
// Redirect logic
// const redirect = 20000; // 20 seconds
// document.getElementById("submit-btn").innerText = "Loading...";

// setTimeout(() => {
//   window.location = "./crypto/courses.html"; // Redirect after delay
// }, redirect);
