let countEl = document.getElementById("counter")
let count = 0
function increment(){
    count += 1
    countEl.innerHTML = count
}

function decrement(){
    count -= 1
    countEl.innerHTML = count
}
let saveDetails = document.getElementById("answers")
 
function save(){
    let countResult = count + " - "
    saveDetails.innerHTML += countResult
}
