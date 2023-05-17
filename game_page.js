var name1 = localStorage.getItem("name1");
var name2 = localStorage.getItem("name2")
document.getElementById("player1_name").innerHTML = name1 + " =  ";
document.getElementById("player2_name").innerHTML = name2 + " =  ";
document.getElementById("questionTurn").innerHTML = name1;
document.getElementById("answerTurn").innerHTML = name2;
var player1Score = 0;
var player2Score = 0;
document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;
function Send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()' >check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
var question_turn="player1";
var answer_turn="player2";
function check(){
    var get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            player1_Score=player1_Score+1;
            document.getElementById("answerTurn").innerHTML="player1_Score";
    }
    else{
        player2_Score=player2_Score+1;
        document.getElementById("answerTurn").innerHTML="player1_Score";
    }
    if(question_turn="player1"){
        question_turn="player2";
        document.getElementById("questionTurn").innerHTML=name2;
    }
    else{
        question_turn="player1";
        document.getElementById("question_Turn").innerHTML=name1;
    }
}
}