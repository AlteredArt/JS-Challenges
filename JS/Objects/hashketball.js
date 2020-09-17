// Hasketball object interation with functions
function gameObject() {
    const object = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
    return object;
  }
  
  function players(){
    const homePlayers = gameObject()['home']['players'];
    const awayPlayers = gameObject().away.players;
    const allPlayers = Object.assign(homePlayers, awayPlayers);
    return allPlayers;
    // return Object.assign({}, homePlayers, awayPlayers);
  }
console.log('gameObject', gameObject())
console.log(players())  
  function numPointsScored(playerName) {
    return players()[playerName].points;
  }
  console.log("points scored", numPointsScored('Brendan Haywood'))

  function shoeSize(playerName){
    return players()[playerName].shoe;
  }
  console.log('shoe size', shoeSize('Brendan Haywood'))
  
  function getPlayer(playerName){
  return players()[playerName];
  }
  
  function getPlayerNumber(playerName){
  return players()[playerName]["number"];
  }
  function teamColors(teamName) {
  if(gameObject().home.teamName === teamName){
    return gameObject().home.colors;
  }
  else if (gameObject().away.teamName === teamName){
    return gameObject().away.colors;
  }else return [];
  }
  
  function getTeamNames(){
  const homeName = gameObject()['home']['teamName'];
  const awayName = gameObject()['away']['teamName'];
  return Object.assign(homeName, awayName);
  // const bothTeams = Object.assign(homeName, awayName);
  // return bothTeams;
  }
  
  function getTeamByName(teamName){
  return gameObject().home.teamName === teamName
    ? gameObject().home
    : gameObject().away
  }
  function getTeamColors(teamName) {
  return getTeamByName(teamName).colors
  }