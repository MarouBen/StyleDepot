const signInButton = document.querySelector(".L_btn");
const registerButton = document.querySelector(".R_btn");
const formBox = document.querySelector(".formBox");

registerButton.onclick = () => {
    formBox.classList.add("active");
}
signInButton.onclick = () => {
    formBox.classList.remove("active");
}
