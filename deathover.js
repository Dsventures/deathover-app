document.getElementById("teamA").addEventListener("change", function () {
  var selVal = this.value;
  var getTeams = teams.filter(function (obj) {
    return obj[1] !== selVal;
  });

  getTeams.unshift(["Bowling", ""]);

  var teamB = document.getElementById("teamB");

  teamB.innerHTML = "";

  for (var i = 0; i < getTeams.length; i++) {
    var option = document.createElement("option");
    option.innerText = getTeams[i][0];
    option.value = getTeams[i][1];
    teamB.appendChild(option);
  }

  // console.log("You selected: ", getTeams);
});
document.getElementById("teamB").addEventListener("change", function () {
  var teamBVal = this.value;
  var teamAVal = document.getElementById("teamA").value;
  // console.log(teamAVal, teamBVal);

  var fd1 = wicketFormulaData
    .filter(function (obj) {
      // console.log(obj);
      return obj["team"] === abrev[teamAVal];
    })
    .map(function (obj) {
      return obj["playerName"];
    })
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });

  // var fd2 = ecoFormulaData
  //   .filter(function (obj) {
  //     // console.log(obj);
  //     return obj["team"] === abrev[teamAVal];
  //   })
  //   .map(function (obj) {
  //     return obj["playerName"];
  //   })
  //   .filter(function (value, index, self) {
  //     return self.indexOf(value) === index;
  //   });

  fd1.unshift("Choose player");
  // console.log("wicketFormulaData", fd1);
  // console.log("ecoFormulaData", fd2);

  // // console.log("You selected: ", bowlers[selVal]);

  var playerSelect = document.getElementById("playerName");

  playerSelect.innerHTML = "";

  for (var i = 0; i < fd1.length; i++) {
    var option = document.createElement("option");
    option.innerText = fd1[i];
    option.value = fd1[i];
    playerSelect.appendChild(option);
  }
});
// ================= ModelBox ========================//

document.getElementById("method").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "block";
  document.getElementsByClassName("model-blackout")[0].style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "none";
  document.getElementsByClassName("model-blackout")[0].style.display = "none";
});

// ===================== .end ModelBox ========================//

document.getElementById("resetBtn2").addEventListener("click", function () {
  var teamBVal = document.getElementById("teamB");
  teamBVal.selectedIndex = null;
  var teamAVal = document.getElementById("teamA");
  teamAVal.selectedIndex = null;
  var playerName = document.getElementById("playerName");
  playerName.selectedIndex = null;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementsByClassName("card")[0].style.display = "flex";
  document.getElementsByClassName("cardA")[0].style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  var teamBVal = document.getElementById("teamB");
  teamBVal.selectedIndex = null;
  var teamAVal = document.getElementById("teamA");
  teamAVal.selectedIndex = null;
  var playerName = document.getElementById("playerName");
  playerName.selectedIndex = null;
});

// ============================== Submit ============================================ //

document.getElementById("submit").addEventListener("click", function () {
  document.getElementsByClassName("card")[0].style.display = "none";
  document.getElementsByClassName("cardA")[0].style.display = "block";
  document.getElementById("resetBtn").style.display = "block";

  var teamBVal = document.getElementById("teamB").value;
  var teamAVal = document.getElementById("teamA").value;
  var selectPlayer = document.getElementById("playerName").value;

  var playerSelect = document.getElementById("playerName");
  var selPlayer = playerSelect.options[playerSelect.selectedIndex].value;

  var selDeathover;

  var deathover_options = document.getElementsByName("deathover_param");
  if (deathover_options) {
    for (var i = 0; i < deathover_options.length; i++) {
      if (deathover_options[i].checked) {
        selDeathover = deathover_options[i].value;
      }
    }
  }

  console.log(teamAVal, teamBVal);
  console.log(selPlayer);
  console.log(selDeathover);

  // var selPlayer = "Jasprit Bumrah";

  var selectedPlayer_WicData = getPlayerData(
    teamAVal,
    teamBVal,
    selPlayer,
    wicketFormulaData
  );

  var selectedPlayer_EcoData = getPlayerData(
    teamAVal,
    teamBVal,
    selPlayer,
    ecoFormulaData
  );

  var calcWickOutput = wicketFormula(selectedPlayer_WicData, selDeathover);
  var calcEcoOutput = ecoFormula(selectedPlayer_EcoData, selDeathover);

  console.log("selectedPlayer_WicData", selectedPlayer_WicData);
  console.log("selectedPlayer_EcoData", selectedPlayer_EcoData);

  document.getElementById("weightedWic").innerHTML = calcWickOutput;
  document.getElementById("weightedEco").innerHTML = calcEcoOutput;
  document.getElementById("bowlerPic").src =
    "img/players/" + selectPlayer.toLowerCase().replace(/\s+/g, "-") + ".jpg";
  // console.log("calcWickOutput", calcWickOutput);
  // console.log("calcEcoOutput", calcEcoOutput);

  var outputSentence =
    "The " +
    selectPlayer +
    " will approximately cede " +
    calcWickOutput +
    " Runs in (1/2) over/s and his chance of taking a wicket is " +
    calcEcoOutput +
    " percentage.";

  document.getElementById("outputSent").innerHTML = outputSentence;
  // Get Selected Player Data
  function getPlayerData(teamA, teamB, playerName, dataset) {
    console.log(teamA, teamB, playerName, dataset);
    return dataset.filter(function (obj) {
      return (
        obj.playerName === playerName &&
        obj.team === abrev[teamA] &&
        obj.againstTeam === abrev[teamB]
      );
    });
  }

  // function filterAndSum(data, property) {
  //   return data
  //     .filter(function (items) {
  //       return items.data_Point !== "Venue";
  //     })
  //     .map(function (obj) {
  //       return parseFloat(obj[property]) * 0.33;
  //     })
  //     .reduce(function (acc, val) {
  //       return acc + val;
  //     });
  // }

  function wicketProbability(cat, data) {
    // console.log("test", cat, data);
    return parseFloat(
      (
        Number(data[0]["wicketDeathOvers(" + cat + ")"]) /
        Number(data[0]["oversBowledDeathOvers(" + cat + ")"])
      ).toFixed(2)
    );
  }

  function wicketFormula(wicdata, deatover_sel) {
    console.log("wicdata", wicdata);
    var t20Probability = wicketProbability("t20i", wicdata);

    var iplProbability = wicketProbability("ipl", wicdata);

    var atProbability = wicketProbability("at", wicdata);

    // console.log(t20Probability, iplProbability, atProbability);

    var formula =
      ((t20Probability + iplProbability + atProbability) / 3) *
      parseInt(deatover_sel) *
      100;

    return formula.toFixed(2);
  }

  function ecoFormula(ecodata, deatover_sel) {
    console.log("ecodata", ecodata[0]);
    var ecoSum =
      parseFloat(ecodata[0]["economy(t20i)"]) +
      parseFloat(ecodata[0]["economy(ipl)"]) +
      parseFloat(ecodata[0]["economy(at)"]);

    var weightageSum =
      parseFloat(ecodata[0]["weightage(t20i)"]) +
      parseFloat(ecodata[0]["weightage(ipl)"]) +
      parseFloat(ecodata[0]["weightage(at)"]);

    var eco_output =
      (ecoSum / Math.round(weightageSum) / 3) * parseInt(deatover_sel);

    return eco_output.toFixed(2);
  }
});
