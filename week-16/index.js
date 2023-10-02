const form = document.forms.userForm;
form.addEventListener("submit", function (event) {
	event.preventDefault();
});

const email = document.getElementById("userEmail");
const errorEmail = document.querySelector(".error__mail");

email.addEventListener("change", function (event) {
	if (email.validity.typeMismatch) {
		errorEmail.textContent = "Неверный формат почты";
	} else if (email.value == "") {
		errorEmail.textContent = "Почта не введена";
	} else {
		errorEmail.textContent = "";
		console.log(email.value);
	}
});

const userPass = document.querySelector("#userPass");
const errorPass = document.querySelector(".error__pass");
const regexpPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
userPass.addEventListener("change", function (event) {
	if (!regexpPassword.test(userPass.value)) {
		errorPass.textContent = "Неверный формат пароля";
	} else {
		userPass.style.borderColor = "#590156f4";
		errorPass.textContent = "";
		console.log(userPass.value);
	}
});
const userPassTwo = document.querySelector("#userPassTwo");
const errorPassTwo = document.querySelector(".error__passTwo");

userPassTwo.addEventListener("change", function (event) {
	if (userPassTwo.value !== userPass.value) {
		errorPassTwo.textContent = "Пароли не совпадают";
	} else {
		userPassTwo.style.borderColor = "#590156f4";
		errorPassTwo.textContent = "";
		console.log(userPassTwo.value);
	}
});
