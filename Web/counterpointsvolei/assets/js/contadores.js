buttonMinusA = document.querySelector("#buttonMinusA");
counterPointsA = document.querySelector("#counterPointsA");

containerSetA = document.querySelector("#containerSetAN");
containerSetB = document.querySelector("#containerSetBN");

buttonMinusB = document.querySelector("#buttonMinusB");
counterPointsB = document.querySelector("#counterPointsB");

insertTeams = document.querySelector(".insertTeams");

timeA = document.querySelector("#timeA");
timeB = document.querySelector("#timeB");

renameTeams = document.querySelector("#renameTeams");
closePopupTeams = document.querySelector("#closePopupTeams");

nameEditA = document.querySelector("#nameEditA");
nameEditB = document.querySelector("#nameEditB");

nameTeamA = document.querySelector("#nameTeamA");
nameTeamB = document.querySelector("#nameTeamB");

resetMiddle = document.querySelector(".resetMiddle");
resetBottom = document.querySelector(".resetBottom");

/**teamA, teamB, SetA, SetB, valor para ganhar*/
let valores = [0, 0, 0, 0, 25];
let nameTeams = ["Time A", "Time B"];

function checkEnd() {
  if (valores[0] === valores[4] - 1 && valores[1] === valores[4] - 1) {
    valores[4] = valores[4] + 2;
    return;
  } else if (valores[0] === valores[4]) {
    valores[2] = plus(valores[2]);
    valores[0] = 0;
    valores[1] = 0;
    valores[4] = 25;
    return;
  } else if (valores[1] === valores[4]) {
    valores[3] = plus(valores[3]);
    valores[0] = 0;
    valores[1] = 0;
    valores[4] = 25;
    return;
  }
}

function updateDisplay(valores) {
  containerSetA.textContent = valores[2];
  containerSetB.textContent = valores[3];
  counterPointsA.textContent = valores[0];
  counterPointsB.textContent = valores[1];
}
function plus(valor) {
  return (valor = valor + 1);
}
function minus(valor) {
  if (valor > 0) {
    valor = valor - 1;
    return valor;
  } else {
    return (valor = 0);
  }
}

function alteraNomes(nameTeams, timeA, timeB) {
  /**if (timeA == null || timeA == "") {
    nameTeams[0] = nameTeams[0];
    return;
  } else if (timeB == null || timeB == "") {
    nameTeams[1] = nameTeams[1];
    return;
  } else {
    nameTeams[0] = timeA;
    nameTeams[1] = timeB;
    return;
  }*/

    nameTeams[0] = timeA;
    nameTeams[1] = timeB;
}

function fechaAbrePopUp(popupActive) {
  popupActive.classList.toggle("active");
}

function exibeNovosNomes(nameTeams) {
  nameEditA.textContent = nameTeams[0];
  nameEditB.textContent = nameTeams[1];
  return;
}

function resetarDados(nameTeams, valores) {
  valores[0] = 0;
  valores[1] = 0;
  valores[2] = 0;
  valores[3] = 0;
  valores[4] = 25;

  nameTeams[0] = "Time A";
  nameTeams[1] = "Time B";
  return;
}

counterPointsA.addEventListener("click", () => {
  valores[0] = plus(valores[0]);
  checkEnd();
  updateDisplay(valores);
});
counterPointsB.addEventListener("click", () => {
  valores[1] = plus(valores[1]);
  checkEnd();
  updateDisplay(valores);
});
buttonMinusA.addEventListener("click", () => {
  valores[0] = minus(valores[0]);
  checkEnd();
  updateDisplay(valores);
});
buttonMinusB.addEventListener("click", () => {
  valores[1] = minus(valores[1]);
  checkEnd();
  updateDisplay(valores);
});
renameTeams.addEventListener("click", () => {
  alteraNomes(nameTeams, timeA.value, timeB.value);
  exibeNovosNomes(nameTeams);
  fechaAbrePopUp(insertTeams);
});
closePopupTeams.addEventListener("click", () => {
  fechaAbrePopUp(insertTeams);
});
nameTeamA.addEventListener("click", () => {
  fechaAbrePopUp(insertTeams);
});
nameTeamB.addEventListener("click", () => {
  fechaAbrePopUp(insertTeams);
});
resetMiddle.addEventListener("click", () => {
  resetarDados(nameTeams, valores);
  exibeNovosNomes(nameTeams);
  updateDisplay(valores);
});
resetBottom.addEventListener("click", () => {
  resetarDados(nameTeams, valores);
  exibeNovosNomes(nameTeams);
  updateDisplay(valores);
});
