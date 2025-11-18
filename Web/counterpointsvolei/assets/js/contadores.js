/**section A */
buttonMinusA = document.querySelector("#buttonMinusA");
counterPointsA = document.querySelector("#counterPointsA");
buttonPlusA = document.querySelector(".buttonPlusA");
containerSetA = document.querySelector("#containerSetA");
nameEditA = document.querySelector("#nameEditA");


/**viewSituation = document.querySelector("#viewSituation");*/
insertTeams = document.querySelector(".insertTeams");

/**section B */
buttonMinusB = document.querySelector("#buttonMinusB");
counterPointsB = document.querySelector("#counterPointsB");
buttonPlusB = document.querySelector(".buttonPlusB");
containerSetB = document.querySelector("#containerSetB");
nameEditB = document.querySelector("#nameEditB");

/**teamA, teamB, SetA, SetB */

let valores = [0,0,0,0];
let nameTeams = ["Time A", "Time B"];

function plusElement(valor){

    let sum = valor +1;
    return sum;

};

function minusElement(valor){

    if(valor < 0  || valor == 0){

        return 0;

    } else{
        let minus = valor -1;
        return minus;

    }

};



/**TeamA */
/**O valores[0] se refere aos pontos do TeamA */
buttonMinusA.addEventListener("click",()=>{

   valores[0] = minusElement(valores[0]);
    counterPointsA.textContent = valores[0];

});

buttonPlusA.addEventListener("click",()=>{

    if(valores[0] < 25){

        valores[0] = plusElement(valores[0]);
        counterPointsA.textContent = valores[0];

    }else{

        /**O valores[2] se refere aos pontos do set do time A */
        valores[0] = 0
        counterPointsA.textContent = valores[0];

        valores[2] = plusElement(valores[2])
        containerSetA.textContent = valores[2];

    }

});

/**TeamB */
/**O valores[1] se refere aos pontos do TeamB */
buttonMinusB.addEventListener("click",()=>{

   valores[1] = minusElement(valores[1]);
    counterPointsB.textContent = valores[1];

});

buttonPlusB.addEventListener("click",()=>{

    if(valores[1] < 25){

        valores[1] = plusElement(valores[1]);
        counterPointsB.textContent = valores[1];

    }else{

        /**O valores[3] se refere aos pontos do set do time B */
        valores[1] = 0
        counterPointsB.textContent = valores[1];

        valores[3] = plusElement(valores[3])
        containerSetB.textContent = valores[3];

    }

});

