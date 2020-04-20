

function myFunction() {
  var person = prompt("Please enter your name");

  var myDate = new Date();
    var hrs =  myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';
  if (person != null) {

let greetdom=  document.querySelector(".greetme");
let check =document.querySelector(".lorem");
let firstMsg =document.querySelector(".my-col");
let colName = document.querySelector(".col-name");
let styl = document.querySelector(".button");
let you= document.querySelector(".chat");


colName.innerHTML = person;
greetdom.innerHTML= greet;
firstMsg.style.display= "none";
check.style.display= "block";
styl.style.display = "none";
you.style.display = "block";
    
}
}
