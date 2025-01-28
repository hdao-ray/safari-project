function openNav() {
   document.getElementById("myNav").style.height = "100%";
}


function closeNav() {
   document.getElementById("myNav").style.height = "0%";
}


ScrollReveal().reveal("header",{ easing: 'ease-in' });
ScrollReveal().reveal("#main-image-title", {delay: 500});
ScrollReveal().reveal("#info-left", {delay: 1000});
ScrollReveal().reveal("#info-right", {delay: 1500});
ScrollReveal().reveal("#quiz", {delay: 1000});




function checkAnswer(){
   let choices = document.getElementsByName("choices");
   let selectedChoice = "";








   for (let i=0, foundChoice = false; i < choices.length && !foundChoice; i++){
       if (choices[i].checked){
           selectedChoice = choices[i].value;
           foundChoice = true;
       }
   }




   if (selectedChoice === ""){
       document.getElementById("feedback").innerHTML = "you did not select an answer";
   }
   else if (selectedChoice === "placeholder2"){
       document.getElementById("feedback").innerHTML = "correct";
       document.getElementById("feedback").style.color = "green";
   }
   else{
       document.getElementById("feedback").innerHTML = "incorrect";
       document.getElementById("feedback").style.color = "red";
   }
}
