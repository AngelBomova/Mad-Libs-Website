function playMadLibs() {
    var username = document.getElementById("username").value;
    var player = document.getElementById("nbaPlayer").value;
    var team = document.getElementById("nbaTeam").value;
    var videoGame = document.getElementById("videoGame").value;
    var number = document.getElementById("num1").value;
    var place = document.getElementById("place").value;
    var year = document.getElementById("year").value;
  
    var story = `
        <b>Your MadLibs Story: Two worlds collide!</b><br>
        ${player} from the NBA and ${team} rescue the cast of ${videoGame} in an epic battle of dunks, three-pointers, and alley-oops! The evil team owner ${username} transports our two heroes to ${place} in the year ${year} to challenge ${username}'s evil team of ${number} players! Who will emerge victorious? Watch and find out!<br><br>
        Coming Fall ${year + 1}!
    `;
  
    document.getElementById("showStory").innerHTML = story;
}
