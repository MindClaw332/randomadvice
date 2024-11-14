const advice = document.getElementById("advice");
const quote = document.getElementById("quote");
const url = "https://api.adviceslip.com/advice"
const refreshButton = document.getElementById("refresh")

function getNewAdvice(){
    console.log("advice")
    fetch(`${url}/${getRandomInt(100)}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        advice.innerHTML = `Advice #${data.slip.id}`
        quote.innerHTML = `"${data.slip.advice}"`
    })
    .catch(error => console.log(error, "er ging iets mis"))
}

function getRandomInt(max){
    let int = Math.floor(Math.random() * max);
    if(int !==0){
        return int;
    } else {
        return 1;
    }
}

refreshButton.addEventListener("click", getNewAdvice);
getNewAdvice();