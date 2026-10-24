"use strict";   // mode strict  obligatoire au tout début 

// = exo2 2 =

// f1 : affiche le contenu d'un tableau  par ligne
function f1() {
    // Tableau de chaînes de caractères 
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for pour parcourir le tableau 
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);   // accès à un élément avec son indice (slide 4)
    }
}

// f2 : affiche un objet avec ses propriétés nom, prénom et âge
function f2() {
   
    const etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant);   // affiche l'objet dans la console
}

// f3 : affiche un tableau d'objets
function f3() {
    // Tableau qui contient des objets 
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for pour parcourir le tableau 
    for (let i = 0; i < etudiants.length; i++) {
        // accès aux propriétés avec le point + concaténation avec + (slide 4)
        console.log(etudiants[i].nom + "-" + etudiants[i].prenom + "-" + etudiants[i].age);
    }
}