import dogs from "./data.js"
import Dog from "./Dog.js"

function getEndMessage() {
    isWaiting = true
    setTimeout(() => {
        document.body.innerHTML = `
            <h3 class="last-page">You have swiped all the dogs.</h3>
            <img class="end-img" src="https://media2.giphy.com/media/l4FAPaGGeB7D1LfIA/giphy.gif?cid=ecf05e47w06cgl81qe0ky59oxijv9i56rs0gzbb0au5gxbpg&rid=giphy.gif&ct=g">
            <button class="btn" id="btn">Return</button>
            ` 
        document.getElementById("btn").addEventListener("click", () => {
            location.reload() 
        })
    },1500)   
}

function getNewDog() {
    const nextDog = dogs.shift()
    return nextDog ? new Dog(nextDog) : {}
}

let isWaiting = false
document.getElementById("cross").addEventListener("click", () => {
    if(!isWaiting) {
        isWaiting = true
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = false
        render()
        if(dogs.length > 0) {
            setTimeout(() => {
                isWaiting = false   
                dog = getNewDog()
                render()   
            },1000)
        }
        else {
            getEndMessage()
        }
    } 
})

document.getElementById("heart").addEventListener("click", () => {
    if(!isWaiting) {
        isWaiting = true
        dog.hasBeenSwiped = true
        dog.hasBeenLiked = true
        render()
        if(dogs.length > 0) {
            setTimeout(() => {
                isWaiting = false   
                dog = getNewDog()
                render()   
            },1000)
        }
        else {
            getEndMessage()
        }
    }
})

function render(){
    document.getElementById("main").innerHTML = dog.getDogHtml()
}

let dog = getNewDog()
render()   
   
