let totalwon = 0
let totallost = 0
let totalAttempt = 5
let attempt = 0



const container = document.querySelector('.container')
const form = container.querySelector('form')
const input = form.querySelector('input')
const button = form.querySelector('button')
let resultGuess = container.querySelector('.resultGuess')
let remainingGuess = container.querySelector('.remainingGuess')
let wonMessage = document.createElement('p')
container.appendChild(wonMessage)



form.addEventListener( 'submit', (e) => {
e.preventDefault()
attempt++
if ( attempt > 4 ){
    input.disabled = true
    button.disabled =  true
}else{
    checkResult(input.value)
    remainingGuess.innerHTML = `your remaining attempts ${totalAttempt-attempt}`
}
input.value = ''

})

const getRandonNumber = (limit) => {
 return   randomNumber = Math.floor(Math.random() * limit )
}

const  checkResult = (value) => {
const randomNumber1 = getRandonNumber(5)

// console.log(randomNumber1)
 
if (randomNumber1 == value){
    resultGuess.innerHTML = `<p>you have won</p>`
    totalwon++
}else{
    resultGuess.innerHTML = ` <p>you have lost, the random number was: ${randomNumber1}</p>`
    totallost++
}
wonMessage.innerHTML = `total won ${totalwon} and total lost ${totallost}`
wonMessage.classList.add('large')


}