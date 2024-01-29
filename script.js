/*
function searchDictionary() {
  const userInput = document.getElementById("userInput").value;

  // You can replace the following with your dictionary API call
  const definition = "Definition not found.";

  // Display the result in the chatbox
  const chatbox = document.getElementById("chatbox");
  const message = document.createElement("p");
  message.innerHTML = `<strong>User:</strong> ${userInput}<br><strong>Bot:</strong> ${definition}`;
  chatbox.appendChild(message);

  // Clear the input field
  document.getElementById("userInput").value = "";
}
*/

function searchDictionary() {
  // Get user input
  var userInput = document.getElementById("userInput").value;

  // Display user message in chatbox
  appendMessage(userInput, "user");

  // Simulate bot response (replace this with your actual bot logic)
  var botResponse = "The definition of " + userInput + " is...";

  // Display bot message in chatbox
  appendMessage(botResponse, "bot");

  // Clear user input
  document.getElementById("userInput").value = "";
}

function appendMessage(message, sender) {
  var chatbox = document.getElementById("chatbox");

  // Create a new message bubble
  var bubble = document.createElement("div");
  bubble.className = "bubble " + sender + "-bubble";
  bubble.textContent = message;

  // Append the bubble to the chatbox
  chatbox.appendChild(bubble);

  // Scroll to the bottom of the chatbox to show the latest messages
  chatbox.scrollTop = chatbox.scrollHeight;
}
