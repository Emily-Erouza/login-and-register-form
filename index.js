
let name;
let Surname;
let email;
let password;

const register = [];
const login = [];

// Login form

var data = localStorage.getItem("login");
const loginClick = (event) => {
    event.preventDefault();
    email = document.getElementById("email").value;
    console.log(email);
    password = document.getElementById("password").value;
    console.log(password)
    validateEmailAndPassword(password, email);
};


login.push({ " email": email, "password": password });
localStorage.setItem("login", JSON.stringify(login));

var data = JSON.parse(localStorage.getItem('registerDetails'));
localStorage.setItem("name", name);
localStorage.setItem("surname", Surname);
localStorage.setItem("password", password);
localStorage.setItem("password", password);
// alert("sucessfully")

console.log(localStorage.getItem("email"));
console.log(localStorage.getItem("password"));

const validateEmailAndPassword = (password, email) => {
    if (email === "" && password === "") {
        return alert(" fill in your details ");
    } else if (email === "") {
        return alert("please enter an email");
    } else if (password === "") {
        return alert("please enter an password");
    } else {
        return "There is something in our string";
    }
};


// Register form

var data = localStorage.getItem("register");
const registerClick = (event) => {
    event.preventDefault();
    name2 = document.getElementById("name2").value;
    console.log(name2);

    Surname = document.getElementById("surname2").value;
    console.log(Surname);

    email = document.getElementById("email2").value;
    console.log(email)

    password = document.getElementById("password2").value;
    console.log(password)

    validateEmailAndPassword(email, password);

    register.push({ "name2": name2, "surname2": Surname, "email2": email, "password2": password })
    localStorage.setItem("registerDetails", JSON.stringify(register));

    console.log(register)
    return console.log(name2, Surname, email, password); {

    }


};


