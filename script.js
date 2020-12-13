let cases = document.getElementsByClassName("case");
const EMPIRE = 0;
const REBEL = 2;



/**
 * Gère mon click sur chaque élément dans la liste d'éléments cases ( tous les éléments de classe .case )
 * @param event
 */
function gestionClick(event) {
    switch(event.button) {
        case EMPIRE:
            // Ton code pour gérer au cas ou c'est un click gauche ==> Classe CSS FA -> fab fa-empire
            if (this.innerHTML.length === 0) {
                let tagI = document.createElement('i');
                tagI.className = "fab fa-empire";
                this.append(tagI);
                this.className = "empire";
            }
            break;
        case REBEL:
            // Ton code pour gérer si c'est un click droit ==> Classe CSS FA -> fab fa-rebel
            if (this.innerHTML.length === 0) {
                let tagI = document.createElement('i');
                tagI.className = "fab fa-rebel";
                this.append(tagI);
                this.className = "rebel";
            }
            break;
    }
    checkCases();
}

for(let zone of cases) {
    zone.addEventListener("mouseup", gestionClick);
}

function checkCases(){
    if(){
        document.getElementById("won").innerHTML = "L'empire a gagné !!";
        console.log("ok");
    }




}





/*ici square contient un nouvel element .case de la liste a chaque passage
for(let square of cases) {
    //on ajoute un listener sur chaque element de classe .case
    square.addEventListener("mouseup", function (event){
        switch (event, "mouseup"){
            case EMPIRE://afficher x est bloquer la case
                insertPlayerTest(this, "<i class=\"fab fa-empire\"></i>");
                break;

            case REBEL://afficher o est bloquer la case
                insertPlayerTest(this, "<i class=\"fab fa-rebel\"></i>");
                break;
        }
        checkCases();
    });
}
function checkCases() {
    let playerX = checkHorizontal("<i class=\"fab fa-empire\"></i>");
    let playerO = checkHorizontal("<i class=\"fab fa-rebel\"></i>");

    if(!playerX && !playerO) {
        playerX = checkVertical("<i class=\"fab fa-empire\"></i>");
        playerO = checkVertical("<i class=\"fab fa-rebel\"></i>");
    }
    if(!playerX && !playerO) {
        playerX = checkDiagonale("<i class=\"fab fa-empire\"></i>");
        playerO = checkDiagonale("<i class=\"fab fa-rebel\"></i>");
    }
    if (playerX) {
        won.innerHTML = "l'empire a gagner !!";
    } else if (playerO) {
        won.innerHTML = "Les rebel ont gagner !!";

    }
}

function checkHorizontal(player) {
    for (let idx = 0; idx <= 8; idx += 3) {
        if (cases[idx].innerHTML === player && cases[idx + 1].innerHTML === player && cases[idx + 2].innerHTML === player) {
            return true;
        }
    }
    return false;
}

function checkVertical(player) {
    for (let idx = 0; idx <= 2; idx++) {
        if (cases[idx].innerHTML === player && cases[idx + 3].innerHTML === player && cases[idx + 6].innerHTML === player) {
            return player;
        } else if (cases[idx].innerHTML === player && cases[idx + 3].innerHTML === player && cases[idx + 6].innerHTML === player) {
            return true;
        }
    }
    return false;
}

function checkDiagonale(player) {

    if (cases[0].innerHTML === player && cases[4].innerHTML === player && cases[8].innerHTML === player) {
        return true;

    } else if (cases[2].innerHTML === player && cases[4].innerHTML === player && cases[6].innerHTML === player) {
        return true;
    }
    return false;
}

//insere une lettre dans le div >case

function insertPlayerTest(element, playerChar) {
    //element contient l'element a qui on va donner la lettre dans playerChar
    if (element.innerHTML.length === 0) {
            element.innerHTML = playerChar;
    }
}
*/


