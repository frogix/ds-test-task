import $ from "jquery"
import validate from "validate.js"

let form = $("#askQuestionForm");
let constraints = {
	name: {
		length: {
			minimum: 1,
			tooShort: "Пожалуйста, укажите ваше имя"
		}
	},
	// email: {
	// 	email: true
	// },
	phone: {
		format: {
			pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$",
			message: "По номеру телефона мы сможем с вами связяться"
		}
	}
};


// returns true if data is valid
// prints error messages on form
let validateForm = function(){
	return validateName() & validatePhone();
};


nameInp.onblur = function(evt) {
	validateName();
};

phoneInp.onblur = function(evt) {
	validatePhone();
};
// emailInp.onblur = function(evt) {
// 	validateEmail(emailInp);
// };

let validateName = function(){
	let data = {name: nameInp.value};
	if (validate(data, constraints)) {
		nameInp.parentElement.classList.add("form__field_error");
		return false;
	} else {
		nameInp.parentElement.classList.remove("form__field_error");
		return true;
	}
};

let validatePhone = function(){
	let data = {phone: phoneInp.value};
	if (validate(data, constraints)) {
		phoneInp.parentElement.classList.add("form__field_error");
		return false;
	} else {
		phoneInp.parentElement.classList.remove("form__field_error");
		return true;
	}
};

// let validateEmail = function(){
// 	let data = {email: emailInp.value};
// 	if (validate(data, constraints)) {
// 		emailInp.parentElement.classList.add("form__field_error");
// 		return false;
// 	} else {
// 		emailInp.parentElement.classList.remove("form__field_error");
// 		return true;
// 	}
// };


form.on("submit", function(evt){
	evt.preventDefault();
	$("#submitBtn").click();
});

$("#submitBtn").click(function(evt) {
	evt.preventDefault();

	if (!validateForm()) return;
	$.ajax({
		url: 'https://digital-spectr.com/ac/academy.php',
		type: 'post',
		dataType: 'json',
		data: form.serialize(),
		success: function(data) {
			console.log("YEAH");
		}
	});
});

