const password = document.querySelector("#password");
const togglepassword = document.querySelector("togglePassword");



togglepassword.addEventListener("click", () => {
    const typr = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    togglepassword.classList.toggle("bi-eye");

});

