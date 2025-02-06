const chatMessages = document.getElementById("chatMessages");

function openChat(contactElement) {
    const contactName = contactElement.getAttribute("data-name");
    const contactProfilePic = contactElement.getAttribute("data-profile");

    document.querySelector(".chat-name").textContent = contactName;
    document.querySelector(".chat-profile-pic").src = contactProfilePic;
    chatMessages.innerHTML = "";
}

function sendMessage() {

    const messageInput = document.getElementById("messageInput");
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const messageElement = document.createElement("div");
        messageElement.classList.add("sent-message");
        messageElement.textContent = messageText;

        
        chatMessages.appendChild(messageElement);

        messageInput.value = "";

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
}