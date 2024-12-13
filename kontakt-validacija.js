document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("kontakt-forma");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    var imeInput = document.getElementById("ime");
    var imeFeedback = imeInput.nextElementSibling;
    if (imeInput.value.length < 6) {
      imeInput.style.borderColor = "red";
      imeFeedback.textContent = "Ime mora biti duže od 6 slova.";
    } else {
      imeInput.style.borderColor = "green";
      imeFeedback.textContent = "";
    }

    var emailInput = document.getElementById("email");
    var emailFeedback = emailInput.nextElementSibling;
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailInput.value.match(emailRegex)) {
      emailInput.style.borderColor = "red";
      emailFeedback.textContent = "Molimo vas da unesete validnu email adresu.";
    } else {
      emailInput.style.borderColor = "green";
      emailFeedback.textContent = "";
    }

    var porukaInput = document.getElementById("poruka");
    var porukaFeedback = porukaInput.nextElementSibling;
    if (porukaInput.value.trim() === "") {
      porukaInput.style.borderColor = "red";
      porukaFeedback.textContent = "Poruka je obavezna.";
    } else {
      porukaInput.style.borderColor = "green";
      porukaFeedback.textContent = "";
    }

    var passwordInput = document.getElementById("password");
    var passwordFeedback = passwordInput.nextElementSibling;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
    if (!passwordInput.value.match(passwordRegex)) {
      passwordInput.style.borderColor = "red";
      passwordFeedback.textContent =
        "Lozinka mora imati najmanje 8 karaktera, uključujući brojeve i specijalne karaktere.";
    } else {
      passwordInput.style.borderColor = "green";
      passwordFeedback.textContent = "";
    }

    form.style.borderColor = "green";
  });
});
