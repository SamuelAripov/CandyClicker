import {
    animations,
    pepperMintFactory,
    powerUps,
} from "./index-functions"

let numOfCookies = 0
let cookiesPerClick = 1

let refreshCookieCount = () => {
    document.querySelector('#cookieCount').innerHTML = ''
    document.querySelector('#cookieCount').innerHTML = `PepperMints: ${numOfCookies.toLocaleString('en')}`
}

document.querySelector('#cookie').addEventListener("click", (e) => {
    animations()
    numOfCookies += cookiesPerClick
    document.querySelector('#cookie').style.width = "295px"
    document.querySelector('#cookie').style.height = "395px"
    document.querySelector('#cookie').style.filter = "brightness(90%)"
    setTimeout(() => {
        document.querySelector('#cookie').style.width = "300px"
        document.querySelector('#cookie').style.height = "400px"
        document.querySelector('#cookie').style.filter = "brightness(100%)"
    }, 50)
    refreshCookieCount()
})
document.querySelector('#button0').addEventListener("click", (e) => {
    if (numOfCookies >= 10) {
        numOfCookies -= 10
        cookiesPerClick = cookiesPerClick * 2
        refreshCookieCount()
    }
})
setInterval(powerUps(), 100);

document.documentElement.style.overflow = 'hidden'
document.body.scroll = "no"

export {
    numOfCookies,
    refreshCookieCount
}



