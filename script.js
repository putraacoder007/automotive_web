function checkAnswer(answer){

let result =
document.getElementById("result");

if(answer === "correct"){

result.innerHTML =
"✅ Correct! Lamborghini Miura is often considered the first true supercar.";

}
else{

result.innerHTML =
"❌ Wrong Answer. Try Again.";

}

}