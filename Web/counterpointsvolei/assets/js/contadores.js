buttonMinusA = document.getElementById("buttonMinusA");
counterPointsA = document.getElementById("counterPointsA");
buttonPlusA = document.getElementById("buttonPlusA");
containerSetA = document.getElementById("containerSetA");

viewSituation = document.getElementById("viewSituation");

buttonMinusB = document.getElementById("buttonMinusB");
counterPointsB = document.getElementById("counterPointsB");
buttonPlusB = document.getElementById("buttonPlusB");
containerSetB = document.getElementById("containerSetB");

/**teamA, teamB, SetA, SetB */

let valores = [0,0,0,0];

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
        counterPointsA.textContent = valores[1];

        valores[3] = plusElement(valores[3])
        containerSetB.textContent = valores[3];

    }

});

