
const button = document.getElementById("messageButton");
const result = document.getElementById("result");

button.addEventListener("click", async function () {

    result.textContent = "Loading...";

    try {
        const response = await fetch("http://localhost:3111/api/message");

        const data = await response.json();

        result.textContent = data.message;

    } catch (error) {
        result.textContent = "Backend connection failed!";
    }

});
