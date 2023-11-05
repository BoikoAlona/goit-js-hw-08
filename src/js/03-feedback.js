import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(inputData, 500));

dataFromStorage();

function inputData(e) {
    let storageData = localStorage.getItem("feedback-form-state");
    storageData = storageData ? JSON.parse(storageData) : {};
    storageData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(storageData));
}

form.addEventListener("submit", (e) => {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  e.preventDefault();
  localStorage.removeItem("feedback-form-state");
  e.currentTarget.reset();
});

function dataFromStorage() {
    let storageData = localStorage.getItem("feedback-form-state");
    if (storageData) {
        storageData = JSON.parse(storageData);
        Object.entries(storageData).forEach(([name, value ]) => {
            form.elements[name].value = value;
        });
    }
}

