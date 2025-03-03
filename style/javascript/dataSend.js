document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById("first-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
        alert("Email sent successfully!");
    } else {
        alert("Failed to send email.");
    }
});