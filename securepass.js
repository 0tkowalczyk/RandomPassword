//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){

  for(i = 0; i = password.length; i++){

    if(password.charCodeAt(i) >=65 && password.charCodeAt(i) <=90){
      return true;
    }

  }
  return false;
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){
  for(i = 0; i = password.length; i++){

    if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <=122){
      return true;
    }

  }
  return false;
}








//returns true or false if there is a numerical character
function numberCheck(password){

  for(i = 0; i = password.length; i++){

    if(password.charCodeAt(i) >=48 && password.charCodeAt(i) <=57){
      return true;
    }

  }
  return false;

}







//returns true or false if there is a special character in the password
function specialCheck(check){

  for(i = 0; i = password.length; i++){

    if((password.charCodeAt(i) >=33 && password.charCodeAt(i) <=47) || (password.charCodeAt(i) >=58 && password.charCodeAt(i) <=64)){
      return true;
    }

  }
  return false;

}










function passedAllChecks(){

}









//returns a string which represents the grade for your password
function grade(password){


}
