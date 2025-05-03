function checkEmail() {
    var email = document.getElementById("email").value;
    var resultDiv = document.getElementById("result");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      resultDiv.innerHTML = "Valid email address.";
      resultDiv.style.color = "green";
    } else {
      resultDiv.innerHTML = "Invalid email address.";
      resultDiv.style.color = "red";
    }
  }

  function checkPhone() {
    var phone = document.getElementById("phone").value;
    var resultDiv1 = document.getElementById("result1");
    var phoneRegex = /^\d{10}$/;

    if (phoneRegex.test(phone)) {
      resultDiv1.innerHTML = "Valid phone number.";
      resultDiv1.style.color = "green";
    } else {
      resultDiv1.innerHTML = "Invalid phone number.";
      resultDiv1.style.color = "red";
    }
  }

  function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
      alert("Please fill all the fields.");
      return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email.");
      return false;
    }

    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    showConfirmation();
    return false;
  }

  function showConfirmation() {
    var confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.style.display = "block";
    confirmationDiv.innerHTML = "Registration successful!<p>thank you for registering.</p>";

  }

  function hideConfirmation() {
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("content").reset();
    document.getElementById("result").innerHTML = "";
    document.getElementById("result1").innerHTML = "";
  }
