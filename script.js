/*
import axios from "axios";

const options = {
  method: "GET",
  url: "https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf",
  headers: {
    "X-RapidAPI-Key": "f8e9674dc7msha2e63ebe0b8584cp1155b5jsn3a4b8f5ef361",
    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
*/

// Add an event listener for the "keydown" event on the input field
document
  .getElementById("userInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      // If Enter key is pressed, trigger the searchDictionary function
      searchDictionary();
    }
  });

function searchDictionary() {
  // Get user input
  const userInput = document.getElementById("userInput").value;

  // Display user message in chatbox
  appendMessage(userInput, "user");

  // Simulate bot response (replace this with your actual bot logic)
  const botResponse = "The definition of " + userInput + " is...";

  // Validate user input
  if (!userInput.trim()) {
    // If the input is empty or contains only whitespace
    alert("Please enter a valid word.");
    return;
  }

  // Display bot message in chatbox
  appendMessage(botResponse, "bot");

  // Clear user input
  document.getElementById("userInput").value = "";
}

function appendMessage(message, sender) {
  const chatbox = document.getElementById("chatbox");

  // Create a new message bubble
  const bubble = document.createElement("div");
  bubble.className = "bubble " + sender + "-bubble";
  bubble.textContent = message;

  // Append the bubble to the chatbox
  chatbox.appendChild(bubble);

  // Scroll to the bottom of the chatbox to show the latest messages
  chatbox.scrollTop = chatbox.scrollHeight;
}
