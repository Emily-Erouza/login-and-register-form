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


const buttonClick = (event) => {
        event.preventDefault();
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

        if (email == "") {
            alert("please fill in email")
            return
        }

        if (password == "") {
            alert("please fil in password")
            return
        }

        if (email.length > 0) {
            login.push({ " email": email, "password": password })
            localStorage.setItem("login", JSON.stringify(login));
        }
        // var arr = JSON.parse(localStorage.getItem('registerDetails'));
        // localStorage.setItem("email", email);
        // localStorage.setItem("password", password);

        // alert("sucessfully")

        console.log("sucessfully completed")




    }
    // console.log(localStorage.getItem("email"));
    // console.log(localStorage.getItem("password"));


const registerClick = (event) => {
    event.preventDefault();
    email2 = document.getElementById("email2").value;
    console.log(email);
    password2 = document.getElementById("password2").value;

    arr.push({ " email2": email2, "password2": password2 })

    localStorage.setItem("registerDetails", JSON.stringify(arr));
    // localStorage.setIterem("password2", password2);

    console.log(arr)
    return console.log("emza", email2, password2);
}