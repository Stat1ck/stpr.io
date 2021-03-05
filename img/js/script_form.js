$(document).ready(function(){
	var email = document.getElementById("mail");
	var inp1 = document.getElementById("inpname");
	var inp3 = document.getElementById("qestion");

	email.addEventListener("input", function (event) {
	  if (email.validity.typeMismatch) {
	    email.setCustomValidity("Введите почту!");
	  } else {
	    email.setCustomValidity("");
	  }
	});
	inp1.addEventListener("input", function (event) {
	  if (inp1.validity.typeMismatch) {
	    inp1.setCustomValidity("Введите имя!");
	  } else {
	    inp1.setCustomValidity("");
	  }
	});
	inp3.addEventListener("input", function (event) {
	  if (inp3.validity.typeMismatch) {
	    inp3.setCustomValidity("Введите вопрос!");
	  } else {
	    inp3.setCustomValidity("");
	  }
	});
});