var a,b,c;

function NSIinput(commentaire){
    return prompt(commentaire);
}

function NSIprint(commentaire){
    var result = document.getElementById("result")
    var retourLigne = document.createElement("br");
    result.appendChild(retourLigne);
    result.innerHTML = result.innerHTML + commentaire;
}

a = parseFloat(NSIinput("Quelle est la valeur de a."));
b = parseFloat(NSIinput("Quelle est la valeur de b."));
c = parseFloat(NSIinput("Quelle est la valeur de c."));

function ndDeg(a,b,c){
    return (b**2) - (4*a*c);
}

var delta = ndDeg(a,b,c);
if (a == 0) {
    NSIprint("Ceci n'est pas une équation du 2nd deg.");
}

if (delta == 0){
    NSIprint('l\'équation à 1 solution:');
    NSIprint(-b / (2. * a));
}

if (delta < 0){
    NSIprint("Cette équation n'as pas de solution.");
}

if (delta > 0){
    NSIprint("Cette équation as 2 solutions:")
    NSIprint ("Les solutions sont x1:")
    NSIprint ((-b - delta**0.5) / (2 * a))
    NSIprint("x2:")
    NSIprint((-b + delta**0.5) / (2 * a))
}