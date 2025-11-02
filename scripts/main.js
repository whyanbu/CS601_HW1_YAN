// DOM Element
const form = document.querySelector("form");
const firstName = document.getElementById("input-first-name");
const lastName = document.getElementById("input-last-name");
const email = document.getElementById("input-email");
const package = document.getElementById("input-package");
const subscription = document.getElementById("input-subscription");
const lblSubcription = document.querySelector("label[for=input-subscription]");
const submit = document.getElementById("btn-submit");
const errorMessages = document.getElementById("error-messages");
const successMessages = document.getElementById("success-messages");

const packageOptions = [ "Bronze", "Silver", "Gold", "Plantinum" ];

// Initialize
errorMessages.style.display = "none";
successMessages.style.display = "none";
package.innerHTML = '<option value="" disabled selected></option>';
package.innerHTML += packageOptions.map(opt => `<option value="${opt}">${opt}</option>`)



const getNumOfAlphaCharacters = input => {
    let count = 0;
    for (let c of input) {
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')) {
            count++;
        }
    }
    return count;
}

const containsIllegalCharacters = input => {
    for (let c of input) {
        if ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c === ' ' || c === '-') continue;
        return true;
    }
    return false;
}


submit.addEventListener("click", e => {
    e.preventDefault();     // prevent page reload
    const messages = [];
    firstName.classList.remove("error-input");
    lastName.classList.remove("error-input");
    email.classList.remove("error-input");
    package.classList.remove("error-input");
    lblSubcription.classList.remove("error-text");
    if (getNumOfAlphaCharacters(firstName.value.trim()) < 2) {
        messages.push("First name should contains at least 2 alpha characters");
        firstName.classList.add("error-input");
    }
    if (containsIllegalCharacters(firstName.value.trim())) {
        messages.push("First name contains illegal characters");
        firstName.classList.add("error-input");
    }
    if (getNumOfAlphaCharacters(lastName.value.trim()) < 2) {
        messages.push("Last name should contains at least 2 alpha characters");
        lastName.classList.add("error-input");
    }
    if (containsIllegalCharacters(lastName.value.trim())) {
        messages.push("Last name contains illegal characters");
        lastName.classList.add("error-input");
    }
    if (email.value.trim() === "") {
        messages.push("Email address is required");
        email.classList.add("error-input");
    } else if (!email.value.match(/^[a-zA-Z]+[a-zA-Z0-9\.]*[a-zA-Z0-9]+@[a-zA-Z]+[\.][a-zA-Z]+/)) {
        messages.push("Email address format not correct");
        email.classList.add("error-input");
    }
    if (!packageOptions.includes(package.value)) {
        messages.push("A package must be selected");
        package.classList.add("error-input");
    }
    if (subscription.checked === false) {
        messages.push("Please confirm subscription to newsletter");
        lblSubcription.style.color = "red";
    }
    if (messages.length > 0) {
        errorMessages.style.display = "block";
        errorMessages.innerHTML = "<ul>"
        errorMessages.innerHTML += messages.map(m => `<li>${m}</li>`).join("");
        errorMessages.innerHTML += "</ul>"
    } else {
        errorMessages.innerHTML = "";
        form.style.display = "none";
        successMessages.style.display = "block";
        successMessages.innerHTML = `<p>Thank you, ${firstName.value.trim()} ${lastName.value.trim()}, for subscribing!</p>`;
        successMessages.innerHTML += `<p>Your eamil ${email.value.trim()} is registerd with our ${package.value} package.</p>`;
    }
});