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
  var selVal = this.value;
  bowlers[selVal].unshift(["choose player"]);
  // console.log("You selected: ", bowlers[selVal]);

  var playerSelect = document.getElementById("playerName");

  playerSelect.innerHTML = "";

  for (var i = 0; i < bowlers[selVal].length; i++) {
    var option = document.createElement("option");
    option.innerText = bowlers[selVal][i];
    option.value = bowlers[selVal][i];
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
  document.getElementsByClassName("card")[0].style.display = "flex";
  document.getElementsByClassName("cardA")[0].style.display = "none";
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementsByClassName("card")[0].style.display = "flex";
  document.getElementsByClassName("cardA")[0].style.display = "none";
});

document.getElementById("submit").addEventListener("click", function () {
  document.getElementsByClassName("card")[0].style.display = "none";
  document.getElementsByClassName("cardA")[0].style.display = "block";

  // var playerSelect = document.getElementById('language');
  // var selPlayer = playerSelect.options[select.selectedIndex].value;
  // console.log(selPlayer);

  var selPlayer = "Jasprit Bumrah";

  var selectedPlayerData = getPlayerData(selPlayer);

  var calcOutput = formula(selectedPlayerData);

  // console.log("selectedPlayerData", selectedPlayerData);

  // Get Selected Player Data
  function getPlayerData(name) {
    return dataset.filter(function (obj) {
      return obj.player_name === name;
    });
  }

  function filterAndSum(data, property) {
    return data
      .filter(function (items) {
        return items.data_Point !== "Venue";
      })
      .map(function (obj) {
        return parseFloat(obj[property]) * 0.33;
      })
      .reduce(function (acc, val) {
        return acc + val;
      });
  }

  function formula(data) {
    var sumEconomyRate = filterAndSum(data, "economyrate").toFixed(2);
    var sumStrikeRate = filterAndSum(data, "strikerate").toFixed(2);
    var sumWicket = Math.round(
      data
        .filter(function (items) {
          return items.data_Point !== "Venue";
        })
        .map(function (obj) {
          return (
            Math.round(parseInt(obj["wickets"]) / parseInt(obj["innings"])) *
            0.33
          );
        })
        .reduce(function (acc, val) {
          return acc + val;
        })
    );

    document.getElementById("weightedEco").innerHTML = sumEconomyRate;
    document.getElementById("weightedSR").innerHTML = sumStrikeRate;
    document.getElementById("weightedWic").innerHTML = sumWicket;

    console.log(sumEconomyRate, sumStrikeRate, sumWicket);
  }
});
