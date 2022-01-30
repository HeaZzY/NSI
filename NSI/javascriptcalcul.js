var a,b,c,d;

function NSIinput(commentaire){
    return prompt(commentaire);
}

function NSIprint(commentaire){
    var result = document.getElementById("result")
    var retourLigne = document.createElement("br");
    result.appendChild(retourLigne);
    result.innerHTML = result.innerHTML + commentaire;
}

a = parseFloat(NSIinput("Quelle est la valeur de a"));
b = parseFloat(NSIinput("Quelle est la valeur de b"));
c = parseFloat(NSIinput("Quelle est la valeur de c"));
d = parseFloat(NSIinput("Quelle est la valeur de d"));

var resultat = (a/b)*(c/d);
NSIprint("Le resultat est:");
NSIprint(resultat);
NSIprint("Le resultat est:");
NSIprint((a/b)+(c/d));