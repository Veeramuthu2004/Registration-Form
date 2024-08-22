function validateForm() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    
    // Check if all fields are filled
    if (firstname === "" || lastname === "" || email === "" || contact === "" || address === "" || city === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Validate that firstname and lastname contain only alphabets and "."
    var alphabeticRegex = /^[a-zA-Z.]+$/;
    
    if (!alphabeticRegex.test(firstname)) {
        alert("First Name should contain only alphabets and '.'");
        return false;
    }

    if (!alphabeticRegex.test(lastname)) {
        alert("Last Name should contain only alphabets and '.'");
        return false;
    }

    // Validate contact number (10 digits)
    if (!/^\d{10}$/.test(contact)) {
        alert("Please enter a valid 10-digit contact number.");
        return false;
    }

    // If all validations pass
    document.getElementById("message").textContent = "Registration complete";
    return false; // prevent form submission for demonstration purposes
}
