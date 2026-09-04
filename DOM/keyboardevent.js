let message = document.querySelector("#message")

function EventName(e) {
    // console.log(e.type)
    console.log(e.key)
}

// message.addEventListener("keyup", EventName);
// message.addEventListener("keydown", EventName);
message.addEventListener("keypress", EventName)