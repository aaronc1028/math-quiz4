 var player1Score=0;
 var player2Score=0;
 var player1Name=localStorage.getItem("player1Name");
 var player2Name=localStorage.getItem("player2Name");
 document.getElementById("player1Name").innerHTML=player1Name + ":";
 document.getElementById("player2Name").innerHTML=player2Name + ":";
document.getElementById("player1Score").innerHTML=player1Score;
document.getElementById("player2Score").innerHTML=player2Score;
document.getElementById("playerQuestion").innerHTML="question-" + player1Name;
document.getElementById("playerAnswer").innerHTML="answer-" + player2Name
 function send(){
      getWord= document.getElementById("word").value;
     word=getWord.toLowerCase();
     charAt1=word.charAt(1);
     halfLength=Math.floor(word.length/2);
     charAt2=word.charAt(halfLength);
     end=word.length-1;
     charAt3=word.charAt(end);
     remove1=word.replace(charAt1,"_");
     remove2=remove1.replace(charAt2, "_");
     remove3=remove2.replace(charAt3, "_");
      questionWord="<h4 id='wordDisplay'>q:"+remove3+"</h4>";
      inputBox="<br> a:<input type='text' id='inputBox'>";
     checkButton="<br> <button class='btn btn-info' onclick='check()'> Check </button>";
     output=questionWord+inputBox+checkButton ;
     document.getElementById("output").innerHTML=output;
     document.getElementById("word").innerHTML="";
 }
question_turn="player1";
answer_turn="player2";

 function check(){
get_answer=document.getElementById("inputBox").value;
answer=get_answer.toLowerCase();
console.log("answer" + answer);
if(answer == word)
{
    if (answer_turn=="player1")
    {
        player1Score=player1Score+1;
        document.getElementById("player1Score").innerHTML=player1Score;


    }
    else
    {
        player2Score=player2Score+1;
        document.getElementById("player2Score").innerHTML=player2Score;
        
    }
}
if (question_turn=="player1")
    {
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn"+ player2Name;



    }
    else
    {
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn"+ player1Name;
    }
    if (answer_turn=="player1")
    {
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="answer turn"+ player2Name;



    } 
    else 
    {
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="answer turn"+ player1Name;  
    }
    document.getElementById("output").innerHTML="";
 }