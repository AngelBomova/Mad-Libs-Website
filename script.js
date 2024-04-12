function playMadLibs() {
    var username = document.getElementById("username").value;
    var nbaPlayer = document.getElementById("nbaPlayer").value;
    var nbaTeam = document.getElementById("nbaTeam").value;
    var number = document.getElementById("numGames").value;
    var videoGame = document.getElementById("videoGame").value;
    var place = document.getElementById("place").value;
    var year = document.getElementById("year").value;
  
    var story = `${username} and ${nbaPlayer} from the ${nbaTeam} enjoy some ${number} while playing some ${videoGame} in ${place}. The ${nbaTeam} will win the ${year} NBA Finals.`;
  
    document.getElementById("showStory").innerHTML = story;
}
