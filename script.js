function ex1(){
    texto = document.getElementById("texto1").value;
    document.getElementById("exemplo1").innerHTML=texto;
}

function ex2(){
    alert(document.getElementById("texto2").value);
}

function ex3(){
    anonascimento = document.getElementById("texto3").value;
    idade = 2022 - +anonascimento; //o + converte o texto para número
    console.log("Você tem "+idade + " anos.");
}

function ex4(anonascimento){    
    idade = 2022 - +anonascimento; //o + converte o texto para número
    console.log("Você tem "+idade + " anos.");
}

function ex5(id){    
    e = document.getElementById(id);
    if(e.value=="Clicou!"){
        e.value = "Clique aqui!";
        e.className = 'btn btn-primary';
    }
    else{
        e.value = "Clicou!";
        e.className = 'btn btn-success';
    }
    
}



