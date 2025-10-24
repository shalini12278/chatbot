const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Change this to your API endpoint if you connect to OpenAI or another backend later
const BOT_NAME = "EmailBot";

function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function getBotReply(userMessage) {
  // Simple demo replies for now — replace later with actual API call
  if (userMessage.toLowerCase().includes("compose")) {
    return "Sure! Please tell me the details of the email you want to compose.";
  } else if (userMessage.toLowerCase().includes("analyze")) {
    return "Please paste the email content you'd like me to analyze.";
  } else {
    return "I can help you compose or analyze emails. Try typing 'compose an email'.";
  }
}

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user");
  userInput.value = "";

  const reply = await getBotReply(message);
  addMessage(`${BOT_NAME}: ${reply}`, "bot");
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendBtn.click();
});
