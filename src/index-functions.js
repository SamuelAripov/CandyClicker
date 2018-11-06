let pepperMintFactoryState = false
let idNum = 0

let animations = () => {
    let id = idNum++
    let elem = document.createElement('img')
    elem.id = `cookie${id}`
    elem.src = 'sprites/smallCandy.png'
    elem.style = `left: ${Math.floor(Math.random() * 70)}%; top:-500px`
    elem.classList.add('images', 'unselectable', 'fallingPepperMintsAnim')
    elem.setAttribute('unselectable', 'on')
    setTimeout(() => { document.querySelector(`#cookie${id}`).remove() }, 6000)
    document.querySelector('#backCookies').appendChild(elem)
}

let powerUps = () => {
    if (pepperMintFactoryState === true) {
        numOfCookies+=1000
    }
}

export {
    animations,
    powerUps
} 