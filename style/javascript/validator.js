document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        let isValid = true;

        function showError(input, message) {
            isValid = false;
            alert(message);
            input.focus();
        }

        let inquiryType = document.getElementById("inquiry-type");
        if (inquiryType.value === "") {
            showError(inquiryType, "Please select an inquiry type.");
            return event.preventDefault();
        }

        let source = document.getElementById("source");
        if (source.value === "") {
            showError(source, "Please select how you found out about HOMBOI.");
            return event.preventDefault();
        }

        let firstName = document.getElementById("first-name");
        if (firstName.value.trim() === "") {
            showError(firstName, "Please enter your first name.");
            return event.preventDefault();
        }

        let lastName = document.getElementById("last-name");
        if (lastName.value.trim() === "") {
            showError(lastName, "Please enter your last name.");
            return event.preventDefault();
        }

        let email = document.getElementById("email");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            showError(email, "Please enter a valid email address.");
            return event.preventDefault();
        }

        let contact = document.getElementById("contact");
        if (!/^[0-9]+$/.test(contact.value.trim())) {
            showError(contact, "Please enter a valid contact number.");
            return event.preventDefault();
        }
    });
});
