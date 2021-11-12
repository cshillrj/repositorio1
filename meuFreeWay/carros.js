let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 270, 318];
let velocidadeCarros = [8, 6, 4, 5, 7, 3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < velocidadeCarros.length; i +=1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < xCarros.length; i += 1){
    if (xCarros[i] < -20){
      xCarros[i] = 600;
    }
  }
}