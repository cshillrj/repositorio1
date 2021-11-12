let xAtor = 200;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }if (keyIsDown(DOWN_ARROW)){
    if (yAtor <= 366){
      yAtor += 3;
    }
  }if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }if (keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i += 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      somColisao.play();
      atorParaPosicaoInicial();
      if (meusPontos >= 1){
        meusPontos -= 1;
      }
    }
  }
}

function atorParaPosicaoInicial(){
  yAtor = 366;
}

function incluiPonto(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 5){
    pontos.play();
    meusPontos += 1;
    atorParaPosicaoInicial();
  }
}
  