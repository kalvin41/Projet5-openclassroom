// votre code ici
function checkAge(age) {
    let a = parseInt(age);
    if (a >= 65) {
        return "Vous êtes senior.";
    } else if (a >= 18) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes mineur.";
    }
}
export default checkAge;
