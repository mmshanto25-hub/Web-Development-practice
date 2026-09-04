const message = document.querySelector("#message");
const result = document.querySelector("#result");

message.addEventListener("change", () => {
    result.textContent = message.value
})