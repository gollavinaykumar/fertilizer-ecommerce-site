

const loginBtn = document.getElementById("loginbtn");
const inputEmail = document.getElementById("inputEmail3");
const inputPassword = document.getElementById("inputPassword3");

const createEmail = document.getElementById("createEmail");
const createPassword = document.getElementById("createPassword");
const savebtn = document.getElementById("saveBtn");


const USER_DETAILS = [
    {
        email: "vinaykumar@gmail.com",
        password: "vinay"
    }
];





loginBtn.addEventListener("click", () => {
    debugger;
    if ((inputEmail.value == USER_DETAILS[0].email) && (inputPassword.value == USER_DETAILS[0].password)) {

        alert("login success");
    }
    else {
        alert("details not found");
    }
});
