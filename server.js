function sendmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let submitButton = document.querySelector("button[type='button']");

    // Clear previous errors
    clearErrors();

    // Validation
    let isValid = true;
    if (!name) {
        showError("name", "Name is required");
        isValid = false;
    }
    if (!email) {
        showError("email", "Email is required");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email", "Enter a valid email");
        isValid = false;
    }
    if (!message) {
        showError("message", "Message cannot be empty");
        isValid = false;
    }

    if (!isValid) return;

    submitButton.disabled = true; // Disable button while sending

    let params = { name, email, message };

    emailjs.send("service_rhyu4om", "template_dy2gypi", params)
    .then(() => {
        showSuccessModal(); // Show success animation
        document.querySelector("form").reset(); // Reset form
    })
    .catch(() => {
        alert("Failed to send message. Please try again.");
    })
    .finally(() => {
        submitButton.disabled = false; // Re-enable button
    });
}

// Function to validate email format
function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to show error message next to inputs
function showError(inputId, message) {
    let inputField = document.getElementById(inputId);
    let errorSpan = document.createElement("span");
    errorSpan.className = "error-message";
    errorSpan.style.color = "red";
    errorSpan.style.fontSize = "14px";
    errorSpan.innerText = message;

    inputField.parentNode.insertBefore(errorSpan, inputField.nextSibling);
}

// Function to clear all previous error messages
function clearErrors() {
    document.querySelectorAll(".error-message").forEach((msg) => msg.remove());
}

// Function to show success modal animation
function showSuccessModal() {
    let modal = document.createElement("div");
    modal.classList.add("success-modal");
    modal.innerHTML = `
        <div class="success-content">
            <div class="checkmark-animation">
                <svg viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" class="circle"></circle>
                    <polyline points="14,27 22,35 36,18" class="check"></polyline>
                </svg>
            </div>
            <p>Message Sent Successfully!</p>
        </div>
    `;
    document.body.appendChild(modal);

    // Auto-close after 3 seconds
    setTimeout(() => {
        closeSuccessModal();
    }, 3000);
}

// Function to close the modal with fade-out effect
function closeSuccessModal() {
    let modal = document.querySelector(".success-modal");
    if (modal) {
        modal.classList.add("fade-out");
        setTimeout(() => modal.remove(), 500);
    }
}
