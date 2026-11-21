
document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    const formMessage = document.getElementById("formMessage");

    const fields = {
        fullName: document.getElementById("fullName"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        service: document.getElementById("service"),
        message: document.getElementById("message")
    };


    // Display field error
    function showError(field, message) {

        const formGroup = field.closest(".form-group");
        const errorElement = formGroup.querySelector(".error-message");

        formGroup.classList.add("has-error");
        errorElement.textContent = message;

    }


    // Clear field error
    function clearError(field) {

        const formGroup = field.closest(".form-group");

        if (!formGroup) return;

        formGroup.classList.remove("has-error");

        const errorElement = formGroup.querySelector(".error-message");

        if (errorElement) {
            errorElement.textContent = "";
        }

    }


    // Validate individual field
    function validateField(field) {

        const value = field.value.trim();

        clearError(field);

        if (field.required && !value) {
            showError(field, "This field is required.");
            return false;
        }

        if (field.id === "fullName" && value.length < 2) {
            showError(field, "Please enter your full name.");
            return false;
        }

        if (field.id === "email") {

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(value)) {
                showError(field, "Please enter a valid email address.");
                return false;
            }

        }

        if (field.id === "phone") {

            const phonePattern = /^[6-9]\d{9}$/;

            if (!phonePattern.test(value)) {
                showError(field, "Enter a valid 10-digit Indian mobile number.");
                return false;
            }

        }

        if (field.id === "message" && value.length < 10) {
            showError(field, "Message must contain at least 10 characters.");
            return false;
        }

        return true;

    }


    // Remove errors while typing
    Object.values(fields).forEach(field => {

        if (!field) return;

        field.addEventListener("input", () => {
            clearError(field);
        });

        field.addEventListener("change", () => {
            clearError(field);
        });

    });


    // Only allow digits in phone number
    fields.phone.addEventListener("input", () => {

        fields.phone.value = fields.phone.value
            .replace(/\D/g, "")
            .slice(0, 10);

    });


    // Form submission
    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.className = "form-message";
        formMessage.textContent = "";

        let isValid = true;

        Object.values(fields).forEach(field => {

            if (!validateField(field)) {
                isValid = false;
            }

        });

        if (!isValid) {

            formMessage.textContent =
                "Please correct the highlighted fields and try again.";

            formMessage.classList.add("error");

            const firstInvalidField =
                contactForm.querySelector(".has-error input, .has-error select, .has-error textarea");

            if (firstInvalidField) {
                firstInvalidField.focus();
            }

            return;

        }


        // Frontend-only demo submission
        const submitButton = contactForm.querySelector(".submit-btn");
        const submitText = submitButton.querySelector("span");

        submitButton.disabled = true;
        submitText.textContent = "Processing...";


        // Simulate local form processing
        formMessage.textContent =
            "Your form is valid! Backend integration is required to send your enquiry to Sunurja Technology.";

        formMessage.classList.add("success");

        submitText.textContent = "Message Validated";

        contactForm.reset();

        setTimeout(() => {

            submitButton.disabled = false;
            submitText.textContent = "Send Message";

        }, 2000);

    });

});
