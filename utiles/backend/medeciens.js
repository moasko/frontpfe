import {
    medeciensListe
} from "../url";


const getMedeciensListe = async() => {
    return new Promise((resolve, reject) => {
        fetch(medeciensListe, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                resolve(response.data);
            });
    });
}

const addMedecien = async(nom, prenom, specialite, email, motDepass) => {
    return new Promise((resolve, reject) => {
        fetch(medeciensListe, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    nom: nom,
                    specialite: specialite,
                    email: email,
                    motDepass: motDepass,
                    prenom: prenom,
                }),
            })
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

const deleteMedecien = async(_id) => {
    return new Promise((resolve, reject) => {
        fetch(medeciensListe + "/" + _id, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                },
            })
            .then(response => response.json())
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                reject(err);
            });
    });
}


export {
    getMedeciensListe,
    deleteMedecien,
    addMedecien
}