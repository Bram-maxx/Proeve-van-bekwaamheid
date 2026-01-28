const form = document.getElementById("form_contact");
const submitBtn = document.getElementById("btnSubmit");
const requiredFields = ["firstname", "lastname", "email", "phone"].map(id => document.getElementById(id));
const allInputs = document.querySelectorAll("input[type='text']");

const getCookie = name => document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1];


if (getCookie("formSubmitted")) submitBtn.disabled = true, submitBtn.value = "Je hebt het formulier al verstuurd";

allInputs.forEach(input => {
    const label = document.querySelector(`label[for='${input.id}']`);
    input.addEventListener("focus", () => { input.style.backgroundColor = "yellow"; if (label) label.style.fontWeight = "bold"; });
    input.addEventListener("blur", () => {
        input.style.backgroundColor = requiredFields.includes(input) && !input.value.trim() ? "red" : "white";
        if (label) label.style.fontWeight = "normal";
    });
});

form.addEventListener("submit", event => {
    let isValid = true;
    requiredFields.forEach(f => { if (!f.value.trim()) f.style.backgroundColor = "red", isValid = false; else f.style.backgroundColor = "white"; });

    const terms = document.getElementById("terms");
    if (!terms.checked) alert("je bent wat vergeten in te voeren"), isValid = false;

    if (!isValid) return event.preventDefault();

    const d = new Date(); d.setFullYear(d.getFullYear() + 1);
    document.cookie = `formSubmitted=true; expires=${d.toUTCString()}; path=/`;
    submitBtn.disabled = true;
    submitBtn.value = "Het formulier is al verzonden op jou computer";
});
