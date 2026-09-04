// window.onscroll = () => {
//     alert("your window are scrooling")
// }

// window.onscroll = () => {
//     console.log("scrolled down")
// }


let scroller = 0;


// window.addEventListener("scroll", () => {
//     if (window.scrollYOffset || document.documentElement.scrollTop > scroller) {
//         console.log("scroll  is down")
//     }
//     else {
//         console.log("scroll is up")
//     }
// })


window.addEventListener("scroll", () => {
    let NewScroller = window.scrollYOffset || document.documentElement.scrollTop;
    if (NewScroller > scroller) {
        console.log("scroll is down")
    }
    else {
        console.log("scroll is up")
    }
    scroller = NewScroller;
})