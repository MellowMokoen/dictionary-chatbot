function searchDictionary() {
  // Get user input
  var userInput = document.getElementById("userInput").value;

  // Display user message in chatbox
  appendMessage(userInput, "user");

  // Simulate bot response (replace this with your actual bot logic)
  var botResponse = "The definition of " + userInput + " is...";

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
