
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let dob = document.querySelector('#dob');
let usernametxt = document.querySelector('#usernametxt');
let flashText = document.querySelector('#flashText');
let passwordtxt = document.querySelector('#passwordtxt');
let confirmtxt = document.querySelector('#confirmtxt');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let btn = document.querySelector('#save');
let showBtn = document.querySelector('#show');
let re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;


password.addEventListener('keyup', active);
confirmPassword.addEventListener('keyup', active_two);
btn.addEventListener('click', testFunc);
btn.addEventListener('click', formvalidation)


function formvalidation(event) {
    if (username.value == "") {
        usernametxt.innerText = "Username fild is required";
        usernametxt.classList = "error-text";
        username.classList = "form-control is-invalid";
    }
    else {
        usernametxt.innerText = "";
        usernametxt.classList.remove('error-text');
        username.classList.remove('is-invalid');
    }

    if (email.value == "") {
        emailtxt.innerText = "Email fild is required";
        emailtxt.classList = "error-text";
        email.classList = "form-control is-invalid";
    }
    else if (!re.test(email.value)) {
        emailtxt.innerText = "invalid Email formate";
        emailtxt.classList = "error-text";
        email.classList = "form-control is-invalid";
    }

    else {
        emailtxt.innerText = "";
        emailtxt.classList.remove('error-text');
        email.classList.remove('is-invalid');
    }

    if (dob.value == "") {
        dobtxt.innerText = "Date fild is required";
        dobtxt.classList = "error-text";
        dob.classList = "form-control is-invalid";
    }
    else {
        dobtxt.innerText = "";
        dobtxt.classList.remove('error-text');
        dob.classList.remove('is-invalid');
    }

}

function active() {
    if (password.value.length >= 6) {
        btn.classList.remove('disabled');
        btn.removeAttribute('disabled');
        confirmPassword.removeAttribute('disabled');
    }
    else {
        btn.classList.add('disabled');
        btn.setAttribute('disabled', 'disabled');
        confirmPassword.setAttribute('disabled', 'disabled');
    }
}

function active_two() {
    if (confirmPassword.value != "") {
        showBtn.style.display = 'block';
        showBtn.onclick = function () {
            if (password.type == 'password' && confirmPassword.type == 'password') {
                password.type = 'text';
                confirmPassword.type = 'text'
                showBtn.textContent = 'Hide';
            }
            else {
                password.type = 'password';
                confirmPassword.type = 'password';
                showBtn.textContent = 'show';
            }
        }
    }
    else {
        showBtn.style.display = 'none';
    }
}


function testFunc() {
    if (password.value != confirmPassword.value) {
        flashText.innerText = "Oops! confirm password not match";
        flashText.style.color = "#ff4f81";
    }
    else {
        flashText.innerText = "Congress! confirm password  match";
        flashText.style.color = "#00ff00";
    }
}