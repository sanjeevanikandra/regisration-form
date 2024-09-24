document.getElementById('registrationForm').addEventListener('submit', function (event) {

    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Retrieve form values
    let name = document.getElementById('name').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    let date = document.getElementById('date').value.trim();
    let address = document.getElementById('address').value.trim();
    let password = document.getElementById('password').value.trim();

    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    } else {
        for (let i = 0; i < name.length; i++) {
            let char = name[i];
            if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z') && char !== ' ') {
                document.getElementById('nameError').textContent = 'Name can only contain alphabetic characters and spaces.';
                isValid = false;
                break;
            }
        }
    }

    // Mobile validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById('mobileError').textContent = 'Please enter a valid 10-digit phone number.';
        isValid = false;
    }

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Age validation
    if (isNaN(age) || age === '') {
        document.getElementById('ageError').textContent = 'Age must be a number.';
        isValid = false;
    } else if (age < 1 || age > 120) {
        document.getElementById('ageError').textContent = 'Age must be between 1 and 120.';
        isValid = false;
    }

    // Date validation
    if (date === '') {
        document.getElementById('dateError').textContent = 'Date of birth is required.';
        isValid = false;
    }

    // Address validation
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required.';
        isValid = false;
    } else if (address.length < 4) {
        document.getElementById('addressError').textContent = 'Address must be at least 4 characters long.';
        isValid = false;
    }

    // Password validation
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('registrationForm').reset();
    }

});
