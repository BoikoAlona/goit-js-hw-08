import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(inputData, 500));

const formData = {};

function inputData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("submit", (e) => {
    console.log(JSON.parse(lokalStorage.getItem("feedback-form-state")));
  e.preventDefault();
  localStorage.removeItem("feedback-form-state");
  form.reset();
});

function dataFromStorage() {
    formData = JSON.parse(lokalStorage.getItem("feedback-form-state")) || {};
    const { email, message } = form.elements;
    if (formData) {
        email.value = formData.email || "";
        message.value = formData.message || "";
    }
}