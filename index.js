// console.log(email);
// function submitSomething(e) {
//     e.preventDefault();
//     return console.log(email, password)
// let btn = document.getElementById("btn");

// btn.addEventListener("click", (event) => {
//     event.preventDefult();
//     console.log(email);
// });

let email;
let password;
const arr = [];
const login = [];
// let id = Maths.floor(Maths.randome() * 20)

var data = localStorage.getItem("login");

const buttonClick = (event) => {
    event.preventDefault();
    email = document.getElementById("email").value;
    console.log(email);
    password = document.getElementById("password").value;

    validateEmailAndPassword(password, email);
};

// console.log('data', data.email)

// var info = data.findById(id)

// if (info.email === '' && info.password === "") {
//     return alert("Your email or password is empty")

// } else {
//     return "There is something in our email"
// }

// console.log("email", buttonClick())

// if (password == "") {
//     return alert("please fill in password!!")
// } else {
//     alert("You pressed the wrong password!")
//     return
// }

// if (email.length > 0) {
login.push({ " email": email, password: password });
localStorage.setItem("login", JSON.stringify(login));
// }
// var arr = JSON.parse(localStorage.getItem('registerDetails'));
// localStorage.setItem("email", email);
// localStorage.setItem("password", password);

// alert("sucessfully")

// console.log(localStorage.getItem("email"));
// console.log(localStorage.getItem("password"));

const validateEmailAndPassword = (password, email) => {
    if (email === "" && password === "") {
        return alert(" fill in your email and password ");
    } else if (email === "") {
        return alert("please enter an email");
    } else if (password === "") {
        return alert("please enter an password");
    } else {
        return "There is something in our string";
    }
};

const registerClick = (event) => {
    event.preventDefault();
    email2 = document.getElementById("email2").value;
    password2 = document.getElementById("password2").value;
    validateEmailAndPassword(password2, email2);

    // arr.push({ " email2": email2, "password2": password2 })
    // localStorage.setItem("registerDetails", JSON.stringify(arr));

    // console.log(arr)
    // return console.log("emza", email2, password2); {

    // }
};