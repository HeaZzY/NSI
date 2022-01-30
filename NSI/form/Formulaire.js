function message(message,id){
    var result = document.getElementById(id);
    var retourLigne = document.createElement("br");
    result.appendChild(retourLigne);
    result.innerHTML = result.innerHTML + message;
    
}
function suppold(id){
    var result = document.getElementById(id);
    result.innerHTML = '';
}

function testage(){
    var age = document.getElementById('age').value;
    if (15 < age && 25 > age){
        suppold('error');
        return age;
    }
    else {   
        suppold('error');
        suppold('result');
        message("L'age doit être compris entre 15 et 25.",'error');
        return 'erreur';
    }
}


function execution(){  
    if (testage() != 'erreur'){
        var Sexe = document.getElementsByName("sexe");
        var bool = Sexe[0].checked;
        if (bool){
            Sexe = Sexe[0].value;
            message(Sexe,'result');
        }
        else{
            Sexe= Sexe[1].value;
            message(Sexe,'result');
        } 
        var nom = document.getElementById('nom').value;
        message(nom,'result');
        var prenom = document.getElementById('prenom').value;
        message(prenom,'result');
        var age = document.getElementById('age').value;
        message(age,'result');
    }
    
}