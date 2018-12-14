//returns a string of random number characters glued together with the proper length.
function randomPinn(len){

  let pass = "";

  for(/*here*/){

    let randomNumber = Math.floor(10*Math.random())+48;
    pass += String.fromCharCode(randomNumber);
  }

  return pass;
}
//returns a string of random upper and lower case characters of the proper length
function randomWord(len){
let pass = "";

for(let i = 0; i < len; i++){

  let randomNumber = Math.floor(25*Math.random())+65;
  pass += String.fromCharCode(randomNumber);
}
return pass;
}
//returns a string of random letters and numbers of the proper length
function randomPass(len){
  let pass = "";

  for(let i = 0; i < len; i++){
    let randomNumber = Math.floor(9*Math.random())+48;
    pass += String.fromCharCode(randomNumber);
  }
return pass;
}
//returns a string of pretty much any ASCII characters, letters, numbers, and specials
function randomSpecialPass(len){

  let pass = "";

  for(let i = 0; i < len; i++){
    let randomNumber = Math.floor(10*Math.random())+33;
    pass += String.fromCharCode(randomNumber);
  }
return pass;
}
//same as the code above, just pass in a length of 20.
function randomSuperPass(){
let pass = "";

for(let i = 0; i < len; i++){
  let randomNumber = Math.floor(10*.random())+33;

  pass += String.fromCharCode(randomNumber);
}
return pass;
}
console.log(randomSuperPass(20))
console.log(randomWord(6))
console.log(randomPass(7))
console.log(randomSpecialPass(5))