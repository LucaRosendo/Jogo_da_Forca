var clicar = document.querySelector("button");
var img = document.querySelector("img");
var palavras = [];
var palavra_escondida = [];
var letra_tentada = '';
var letras_tentadas = [];
var letras_certas = [];
var palavra_sorteada;
var i = 0;
var erro = 0;
var p = document.getElementById("escondido");
function criarPalavra(){
    const nova_palavra = document.getElementById("novapalavra").value;

    if(nova_palavra == "fim"){
        clicar.setAttribute("onclick", "comecarJogo()")
        alert("vamos começar o jogo!");
        console.log("sorteando");
        PalavraSecreta();
        esconderpalavra();
    }else{
        if(nova_palavra !== ""){
          palavras.push(nova_palavra);
          alert("Palavra adicionada!");
          console.log(palavras[i]);
          i++;
        }
    } 
}

function comecarJogo(){
  let tentada = false;
  letra_tentada = document.getElementById("novapalavra").value;
  if(letra_tentada.length == 1){
    console.log("Tentando uma letra");
    for(i = 0; i < letras_tentadas.length; i++){
      if(letra_tentada == letras_tentadas[i]){
        tentada = true;
      }
    }
    if(tentada){
      alert("Você já tentou essa letra!")
    }else{
      letras_tentadas.push(document.getElementById("novapalavra").value);
      verificarPalavra();
    }
  }else{
    console.log("Tentando mais de uma letra");
    if(document.getElementById("novapalavra").value == palavra_sorteada){
      palavra_escondida = palavra_sorteada;
      alert("Você venceu");
    }
  }
  
}

function PalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length);
    
    palavra_sorteada = palavras[indexPalavra];
}

function esconderpalavra(){
  palavra_escondida = [];
  for(i = 0; i < palavra_sorteada.length; i++){
    palavra_escondida.push("*");
  }
  palavra_escondida = palavra_escondida.join('');
  p.innerText = palavra_escondida;
}

function mudarimagem(){
  if(erro >5){
    alert("Você perdeu o jogo, tente novamente.");
    console.log("sorteando");
    PalavraSecreta();
    esconderpalavra();
    letras_tentadas = [];
    letras_certas = [];
    erro = 0;
  }

  switch(erro){
    case 1:
      img.setAttribute("src", "Forca_2.png");
    break;
      
    case 2:
      img.setAttribute("src", "Forca_3.png");
    break;
      
    case 3:
      img.setAttribute("src", "Forca_4.png");
    break;
      
    case 4:
      img.setAttribute("src", "Forca_5.png");
    break;
      
    case 5:
      img.setAttribute("src", "Forca_6.png");
    break;
  }
}

function verificarPalavra(){
  let acertou = false;
  for(i = 0; i < palavra_sorteada.length ; i++){
    if(letra_tentada == palavra_sorteada[i]){
      letras_certas.push(letra_tentada);
      acertou = true;
    }
  }
  if(acertou){
    alert("Parabéns, você acertou essa letra!")
  }else{
    erro++;
    mudarimagem();
  }
  let palavra_escondida = palavra_sorteada.split('')
  for(let i = 0; i< palavra_escondida.length; i++){
    let certo = false
    for(let j = 0; j < letras_certas.length; j++){
      if (palavra_escondida[i] == letras_certas[j]) {
        certo = true
        break
      }
    }
    if (!certo) {
      palavra_escondida[i] = '*'      
    }
  }

  palavra_escondida = palavra_escondida.join('')
  p.innerText = palavra_escondida;
  if(palavra_escondida === palavra_sorteada){
    alert("Você Ganhou!!!!!!!!!")
  }
}
