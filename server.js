function sendmail() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Validation: Check if all fields are filled
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    let submitButton = document.querySelector("button[type='button']");
    submitButton.disabled = true; // Disable button while sending

    let params = { name, email, message };

    emailjs.send("service_rhyu4om", "template_dy2gypi", params)
    .then(function() {
        showSuccessModal(); // Show success animation
        document.querySelector("form").reset(); // Reset form
    }, function() {
        alert("Failed to send message. Please try again.");
    })
    .finally(() => {
        submitButton.disabled = false; // Re-enable button
    });
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

// Function to close the modal
function closeSuccessModal() {
    let modal = document.querySelector(".success-modal");
    if (modal) {
        modal.classList.add("fade-out");
        setTimeout(() => modal.remove(), 500);
    }
}
