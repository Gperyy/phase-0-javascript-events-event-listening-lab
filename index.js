const field = document.getElementById("button");
const addingEventListener = () => {
    field.addEventListener("click", function () {
        alert("I was clicked!");
    });
};