let homePoints = document.getElementById("home-board-points")
let guestPoints = document.getElementById("guest-board-points")
let homeTotal = 0
let guestTotal = 0

function homeButtonOne() {
    homeTotal += 1 
    console.log(homeTotal)
    homePoints.textContent = homeTotal
}

function homeButtonTwo() {
    homeTotal += 2 
    console.log(homeTotal)
    homePoints.textContent = homeTotal
}

function homeButtonThree() {
    homeTotal += 3 
    console.log(homeTotal)
    homePoints.textContent = homeTotal
}


function guestButtonOne() {
    guestTotal += 1 
    console.log(homeTotal)
    guestPoints.textContent = guestTotal
}

function guestButtonTwo() {
    guestTotal += 2 
    console.log(homeTotal)
    guestPoints.textContent = guestTotal
}

function guestButtonThree() {
    guestTotal += 3
    console.log(homeTotal)
    guestPoints.textContent = guestTotal
}


