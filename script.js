function randomNumbers(){
  let x = Math.floor((Math.random() * 6) + 1);
  document.getElementById("holder").innerHTML = x;

  let userNumber = document.getElementById("userNumber").value

  if (userNumber == x){
    document.getElementById("holder").innerHTML = "You win! The right number was " + x;
  }
  if (userNumber != x){
    document.getElementById("holder").innerHTML = "You lose! Try again, the right number was " + x;;
  }
}
