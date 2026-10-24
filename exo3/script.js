"use strict"; // mode strict : obligatoire au tout début (slide 2)
// = Exeo3 =
// Données des étudiants (Matricule, Prénom, Nom, Note1, Note2)
const Students = [
                [1000, 'JOHN', 'DOE', 14, 5],
                [2000, 'BOB', 'CARLTON', 7, 1],
                [3000, 'RAYANE', 'SMITH', 13, 3]
                ];

function fonctionA() {
    for (let i = 0; i < Students.length; i++) {
        let student = Students[i];
        let matricule = student[0];
        let note = student[3]; // Récupère la note (ex: 14, 7, 13)

        // Appel de la fonction B
        let estAdmis = fonctionB(note);

        // Affichage du résultat dans la console
        if (estAdmis) {
            console.log(matricule + ": ADMIS");
        } else {
            console.log(matricule + ": AJOURNÉ");
        }
    }
}

function fonctionB(note) {
    return note >= 10;
}