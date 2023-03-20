const signInButton = document.querySelector(".signInBtn");
const registerButton = document.querySelector(".registerBtn");
const formBox = document.querySelector(".formBox");
const body = document.querySelector(".body");
registerButton.onclick = () => {
    formBox.classList.add("active");
    body.classList.add("active");
}
signInButton.onclick = () => {
    formBox.classList.remove("active");
    body.classList.remove("active");
}
