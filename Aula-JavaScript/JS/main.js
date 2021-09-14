var nome = "Luís Henrique";
var idade = 23;
var idade2 = 10;
var frase = "Ahri é o melhor mid do lol"
//alert("Bem vindo" + nome); //Dá para concatenar normalmente
//alert(idade+idade2); //Vai aparecer a soma no alerta
//Com o F12 da para abrir o console do browser e lá da pra ver o que está contecendo no código
//Também da para usar:
//console.log(nome);
//console.log(idade+idade2);

//Mudando algo na string:
//console.log(frase.replace("Ahri", "Vex"));
//alert(frase.replace("Ahri", "Vex"));

//Colocando tudo em caixa alta:
//console.log(frase.toUpperCase());

//Tudo minúsculo:
//console.log(frase.toLowerCase());

//Arrays:
//var lista=["maça", "pêra", "Laranja"];
//console.log(lista[1]);

//Adicionando elemento:
//lista.push("uva");

//Retirando elemento:
//lista.pop(); //retira o último elemento

//Tamanho da lista:
//console.log(lista.length);
//console.log(lista.reverse); //coloca os elementos ao contrário
//console.log(lista.toString()); //transforma o Array em string
//console.log(lista.join("-")); //Tira a vírgula de separação e coloca o que tiver entre as aspas, pode ter nada também.

//Dicionário:
//var fruta = {nome: "maça", cor:"Vermelha"};
//console.log(fruta); //imprime nome e cor
//console.log(fruta.nome); //imprime apenas o nome

//Lista de dicionários:
//var frutas = [{nome: "maça", cor: "Vermelha"}, {nome:"uva", cor: "roxa"}];
//console.log(fruta); //Aparece todas as frutas e cores

//Condicionais:
//var idade = 18;
//if(idade >= 18){
//    alert("Maior de idade");
//}else{
//    alert("Menor de idade");
//}
//var idade = prompt("Qual sua idade?"); //É um leia.

//Laços de repetição:
//var count = 0;
//while(count<5){
//    console.log(count);
//    count = count + 1; //ou count++
//}

//for(count = 0; count <=5; count++){
//    alert(count);
//}

//Data
//var d = new Date();
//alert(d); //imprime tudo, incusive fuso horário
//alert(d.getMonth()+1); //Dá o número do mês;
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());

//Funções
//function soma(n1,n2){
//    return n1+n2;
//}
//alert(soma(5,10));

//function setReplace(frase,nome, novo_nome){
//    frase.Replace(nome,novo_nome);
//}
//alert(setReplace("Vai Ahri", "Ahri", "Vex"));

//function validaIdade(idade){
//    var validar;
//    if (idade >=18){
//        validar = true;
//    }else{
//        validar = false;
//    }
//    return validar;
//}

//var idade = prompt("Qual sua idade?");
//console.log(validaIdade(idade));
//Quando o var é declarado fora da função, ele passa a ser global, sendo assim, nao precisa declarar dentro da função novamente

//function botao(){
    //alert("Obrigado por clicar");
//    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //Pelo ID ele pega o elemento com o nome entre aspas, o .innerHTML faz com que Ejete a mensagem após

//}
//function redirecionar(){
//    window.open("https://luishunb.github.io/Recriando-a-pagina-do-instagram/");
//    window.location.href = "https://luishunb.github.io/Recriando-a-pagina-do-instagram/";
    //Os dois fazem a mesma função, so muda que href abre na mesma página
//}

//function trocar(){
//    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
//}

//function voltar(){
//    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
//}

//Para não ter que fazer essas funções sempre que tiver um ID novo, basta fazer:
function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
}
function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
}
//Depois acrescenta o this como parametro das funções no html
//Também pode remover os ID's dos elementos

//Onload
function load(){
    alert("Página carregada!");
}

//Onchange
function funcaoChange(elemento){
    console.log(elemento.value);
}