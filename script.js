//je recupere mes case de jeu
let cases = document.getElementsByClassName("case");

//je definit mes variables

let player = 1;

//deffinir le tour des joueurs

for (let j of cases) {
    j.addEventListener("click", function () {
        switch (player) {
            case 1:
                image = document.createElement("img");
                image.src="empire.jpg";
                j.appendChild(image);
                j.className = "p1";
                player = 2;
                break;
            case 2:
                image = document.createElement("img");
                image.src="rebel.jpg";
                j.appendChild(image);
                j.className = "p2";
                player = 1;
                break;
            }
        });
    }

//verification qui gagne
tour()





//affiche le gagnant

//bouton reset

