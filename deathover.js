document.getElementById("teamA").addEventListener("change", function () {
  var selVal = this.value;
  var getTeams = teams.filter(function (obj) {
    return obj[1] !== selVal;
  });
  document.getElementById("submitError").style.display = "none";

  getTeams.unshift(["Team 2", ""]);

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
  document.getElementById("submitError").style.display = "none";
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

  fd1.unshift("Choose bowler");
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

document.getElementById("playerName").addEventListener("change", function () {
  var playerName = this.value;
  var teamAVal = document.getElementById("teamA").value;
  var teamBVal = document.getElementById("teamB").value;
  console.log(playerName, teamAVal, teamBVal);
  var fd = wicketFormulaData
    .filter(function (obj) {
      return obj["playerName"] === playerName;
    })
    .map(function (obj) {
      return obj["againstTeam"];
    });

  if (!fd.includes(abrev[teamBVal])) {
    document.getElementById("disclaimer").style.display = "block";
    document.getElementById("disclaimerTxt").innerHTML =
      playerName +
      " has not played against " +
      abrev[teamBVal] +
      " in this IPL.";
  }
  // console.log(fd);
  // console.log(fd.includes(abrev[teamBVal]));
});
// ================= ModelBox ========================//

document
  .getElementById("closeDisclaimer")
  .addEventListener("click", function () {
    document.getElementById("disclaimer").style.display = "none";
    var teamAVal = document.getElementById("teamA");
    teamAVal.selectedIndex = null;
    var teamBVal = document.getElementById("teamB");
    teamBVal.innerHTML = null;
    teamBVal.innerHTML = "<option>Team 2</option>";
    var playerName = document.getElementById("playerName");
    playerName.innerHTML = null;
    playerName.innerHTML = "<option>Choose bowler</option>";
    document.getElementById("submitError").style.display = "block";
  });
document.getElementById("method").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "block";
  document.getElementsByClassName("model-blackout")[0].style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "none";
  document.getElementsByClassName("model-blackout")[0].style.display = "none";
});
document.getElementById("closeBtnModel").addEventListener("click", function () {
  document.getElementsByClassName("modelbox")[0].style.display = "none";
  document.getElementsByClassName("model-blackout")[0].style.display = "none";
});

// ===================== .end ModelBox ========================//

document.getElementById("resetBtn2").addEventListener("click", function () {
  var teamAVal = document.getElementById("teamA");
  teamAVal.selectedIndex = null;
  var teamBVal = document.getElementById("teamB");
  teamBVal.innerHTML = null;
  teamBVal.innerHTML = "<option>Team 2</option>";
  var playerName = document.getElementById("playerName");
  playerName.innerHTML = null;
  playerName.innerHTML = "<option>Choose bowler</option>";
  document.getElementById("submitError").style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementsByClassName("card")[0].style.display = "flex";
  document.getElementsByClassName("cardA")[0].style.display = "none";
  document.getElementById("resetBtn").style.display = "none";
  var teamAVal = document.getElementById("teamA");
  teamAVal.selectedIndex = null;
  var teamBVal = document.getElementById("teamB");
  teamBVal.innerHTML = null;
  teamBVal.innerHTML = "<option>Team 2</option>";
  var playerName = document.getElementById("playerName");
  playerName.innerHTML = null;
  playerName.innerHTML = "<option>Choose bowler</option>";
  document.getElementById("submitError").style.display = "none";
});

// ============================== Submit ============================================ //

document.getElementById("submit").addEventListener("click", function () {
  var teamBVal = document.getElementById("teamB").value;
  var teamAVal = document.getElementById("teamA").value;
  var selectPlayer = document.getElementById("playerName").value;

  // console.log(teamBVal, teamAVal, selectPlayer);
  if (
    teamAVal !== "Team 1" &&
    teamBVal !== "Team 2" &&
    selectPlayer !== "Choose bowler"
  ) {
    renderData();
  } else {
    // console.log("Select team & player");
    document.getElementById("submitError").innerHTML = "Select teams & bowler";
    document.getElementById("submitError").style.display = "block";
  }

  function renderData() {
    document.getElementsByClassName("card")[0].style.display = "none";
    document.getElementsByClassName("cardA")[0].style.display = "block";
    document.getElementById("resetBtn").style.display = "block";

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

    document.getElementById("bowlerPic").src =
      "img/players/" + selectPlayer.toLowerCase().replace(/\s+/g, "-") + ".jpg";

    var outputSentence =
      "<span>" +
      selectPlayer +
      "</span> will approximately cede <span>" +
      calcEcoOutput +
      " runs in " +
      selDeathover +
      " overs </span> and his chance of taking a wicket is <span>" +
      calcWickOutput +
      "%</span>.";

    document.getElementById("outputSent").innerHTML = outputSentence;
  }

  // Get Selected Player Data
  function getPlayerData(teamA, teamB, playerName, dataset) {
    // console.log(teamA, teamB, playerName, dataset);
    return dataset.filter(function (obj) {
      return (
        obj.playerName === playerName &&
        obj.team === abrev[teamA] &&
        obj.againstTeam === abrev[teamB]
      );
    });
  }

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
