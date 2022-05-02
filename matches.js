// write js code here corresponding to matches.html
var favouriteArr=JSON.parse(localStorage.getItem("schedule")) 
displayData(favouriteArr);

function coverFilter(){
    var selected = document.getElementById("filterVenue").value;
    console.log(selected);
   
    var filteredList = favouriteArr.filter(function(elem){
       if(elem.Venue===selected){
           console.log("elem",elem)
       }
        return elem.Venue == selected;
    });
   
    displayData(filteredList);
}

var matchArr =JSON.parse(localStorage.getItem("favourites"))  

function displayData(Data){
    document.querySelector("tbody").innerHTML="";
    Data.forEach(function(elem ,index){
        var row=document.createElement("tr");

        var col1=document.createElement("td");
        col1.innerText=elem.MatchNum;

        var col2=document.createElement("td");
        col2.innerText=elem.TeamA;

        var col3=document.createElement("td");
        col3.innerText=elem.TeamB;

        var col4=document.createElement("td");
        col4.innerText=elem.Date;

        var col5=document.createElement("td");
        col5.innerText=elem.Venue;

        var col6=document.createElement("td");
        col6.innerText="Add as Favourites";
        col6.style.color="green";
        col6.style.cursor="pointer";
        col6.addEventListener("click", function() {
            favouriteFun(elem)
        })
        row.append(col1,col2,col3,col4,col5,col6)
        document.querySelector("tbody").append(row)
        function favouriteFun(elem){
            console.log(matchArr)
            matchArr.push(elem)
         
           
            localStorage.setItem("favourites",JSON.stringify(matchArr));
           
        }

    });
}