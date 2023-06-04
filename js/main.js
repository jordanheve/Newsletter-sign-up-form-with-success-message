const sectionForm = document.querySelector(".section-form");
const sectionSuccess = document.querySelector(".section-success");
const form = document.querySelector(".form");
const emailInput = form.querySelector(".input-email");
const labelAlert = form.querySelector(".label-alert");
const emailSent = document.querySelector(".email-sent");
const emailRegex = /^\S+@\S+\.\S+$/;

form.addEventListener("submit", e => {
    const emailValue = emailInput.value.trim();
    e.preventDefault();
    if (emailRegex.test(emailValue)) {
        sectionSuccess.classList.remove("hidden");
        sectionForm.classList.add("hidden");
        emailSent.innerText = emailValue;
    } else {
        emailInput.classList.add("invalid");
        labelAlert.classList.add("active");
        emailInput.value = "";
        emailInput.placeholder = "ash@loremcompany.com";
    }
});