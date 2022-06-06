import { groupesListe } from "../url";

const groupesliste = async() => {
    const response = await fetch(groupesListe);
    const data = await response.json();
    return data;
}