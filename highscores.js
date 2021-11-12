// var displayHighScores = function() {
//     document.getElementById("allScores").innerHTML = 
//     localStorage.getItem("allScores")
// }

// displayHighScores (); 


var allScores = JSON.parse (localStorage.getItem("allScores")) || []; 
           for (i = 0; i < allScores.length; i++) {
            var node = document.createElement("LI");                 // Create a <li> node
            var textnode = document.createTextNode(`${allScores[i].initials}  || Score: ${allScores[i].score}`);         // Create a text node
            node.style.position = "inside"
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("highscore").appendChild(node);     // Append <li> to <ul> with id="myList"

           }

function deleteScore(){
    localStorage.clear("allScores"); 

    document.getElementById("custom").innerHTML = "All Scores Deleted"; 


}
    

           
      