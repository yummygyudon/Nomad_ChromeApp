/*

const playerName = "Jung" ;
const playerPoints = 121212 ; 
const playerHandsome = true ;
const playerFat = "little bit" ;
*/
/*
//const player = ["Jung", 121212, true, "little bit"] ;
const player = {
  name : "Jung",
  points : 10, 
  handsome : true
}
console.log(player);
console.log(player.name);
console.log(player["name"]);
console.log(player.points);
console.log(player["points"]);

// 변경 Object가 const여도 가능 (그저 update 이기 때문)
player.name = "Kim" ;
console.log(player.name);

// 추가
player.lastName = "Donggyu";
console.log(player);
*/

/*
function sayHello() {
  console.log("Hello");
}
for(let i = 0 ; i < 3 ; i++) {
  sayHello();  
}
sayHello("Python"); // Hello
sayHello("Java"); // Hello
sayHello("JavaScript"); // Hello
*/
/*
const player = {
  name : "Jung",
  sayHello : function(personToSayHello) {
    console.log("hello " + personToSayHello+ "!! nice to meet you");
  }
};
player.sayHello("Kim") ;
*/
/*
const age = parseInt( prompt("Your age?") );
// console.log(age) ;

if (isNaN(age)) {
  console.log("Wrong Value! Try Again!") ;
}else {
  console.log("Your age is "+age) ;
}
*/

/*
EventListener 사용해보기
const title = document.querySelector("div.hello:first-child h1") ;
function handleTitClick(){
  title.style.color = "red" ;
}
function handleMouseEnter(){
  title.innerHTML = "Mouse In!" ;
}
function handleMouseLeave(){
  title.innerHTML = "Mouse Out!" ;
}

title.addEventListener("click", handleTitClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
*/