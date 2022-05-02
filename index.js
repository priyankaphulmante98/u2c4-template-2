// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFunction)
var matchArr=JSON.parse(localStorage.getItem("schedule")) || []

function myFunction(event){
    event.preventDefault()
     var masaiform = document.getElementById("masaiForm");


    var obj={
        MatchNum:masaiform.matchNum.value,
        TeamA:masaiform.teamA.value,
        TeamB:masaiform.teamB.value,
        Date:masaiform.date.value,
        Venue:masaiform.venue.value,

    }

    matchArr.push(obj)
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    console.log(obj)
    window.location.href="./matches.html"
}

