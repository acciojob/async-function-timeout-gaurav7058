document.getElementById("btn").addEventListener("click", async (e) => {
    e.preventDefault();

    const userText = document.getElementById("text").value.trim();
    const delayText = document.getElementById("delay").value.trim();
    const output = document.getElementById("output");

    // Convert delay from milliseconds if needed
    const delayInMs = parseInt(delayText, 10);

    // Async function with delay
    const delayedDisplay = async (text, delay) => {
        await new Promise(resolve => setTimeout(resolve, delay));
        output.innerText = text
    };

    // Call the async function with the provided values
    delayedDisplay(userText, delayInMs);
});
