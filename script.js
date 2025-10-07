function validateForm() {
  // Get input values
  const firstName = document.getElementById("firstName");
  const middleInitial = document.getElementById("middleInitial");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");

  // Get error labels
  const fnameError = document.getElementById("fnameError");
  const mnameError = document.getElementById("mnameError");
  const lnameError = document.getElementById("lnameError");
  const emailError = document.getElementById("emailError");

  // Reset previous errors
  [firstName, middleInitial, lastName, email].forEach(input => {
    input.classList.remove("error-border");
  });
  [fnameError, mnameError, lnameError, emailError].forEach(err => err.textContent = "");

  let isValid = true;

  // Check required fields
  if (firstName.value.trim() === "") {
    fnameError.textContent = "First Name is required";
    firstName.classList.add("error-border");
    isValid = false;
  }
  if (middleInitial.value.trim() === "") {
    mnameError.textContent = "Middle Initial is required";
    middleInitial.classList.add("error-border");
    isValid = false;
  }
  if (lastName.value.trim() === "") {
    lnameError.textContent = "Last Name required";
    lastName.classList.add("error-border");
    isValid = false;
  }
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.classList.add("error-border");
    isValid = false;
  } else {
    // Email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Invalid email format";
      email.classList.add("error-border");
      isValid = false;
    }
  }

  if (isValid) {
    alert("Success!");
  }
}