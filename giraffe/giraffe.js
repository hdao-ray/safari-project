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
        document.getElementById("feedback").innerHTML = "You did not select an answer";
    }
    else if (selectedChoice === "placeholder3"){
        document.getElementById("feedback").innerHTML = "Correct!";
        document.getElementById("feedback").style.color = "green";
    }
    else{
        document.getElementById("feedback").innerHTML = "Incorrect :(";
        document.getElementById("feedback").style.color = "red";
    }
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}