//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;

// velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis da raquete
let xRaquete= 5;
let yRaquete= 150;
let raqueteComprimento= 10;
let raqueteAltura= 90;

let colidiuRaquete = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}
//variaveis do oponente
let xRaqueteOponente= 585 ;
let yRaqueteOponente= 150;
let velocidadeYOponente;

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  borda1();
  mostraraquete (xRaquete, yRaquete);
  movimentaminharaquete ();
  mostraraquete (xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente ();
 verificaColisaoRaquete (xRaqueteOponente, yRaqueteOponente);
 // verificacolisaoraquete ();
  verificaColisaoRaquete (xRaquete, yRaquete);
  incluiPlacar ();
  marcaPonto () ;      
}
function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro)

}
 function movimentoBolinha(){
  xBolinha +=  velocidadexBolinha
yBolinha += velocidadeyBolinha
   
 }
function borda1(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
  
  velocidadexBolinha *= -1;
}
  
  if( yBolinha + raio> height || yBolinha - raio< 0){
    velocidadeyBolinha *= -1;
  }
}
function mostraraquete (x, y){
  rect( x, y, raqueteComprimento, raqueteAltura)
}

function mostraraqueteOponente (){
  rect( xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura)
}

function movimentaminharaquete (){
  if (keyIsDown( UP_ARROW )) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
 }
  
}
function verificacolisaoraquete(){
  
  if (xBolinha -raio < xRaquete + raqueteComprimento && yBolinha- raio <yRaquete + raquetealtura && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
  }
}
function verificaColisaoRaquete(x, y){
  colidiu=
  collideRectCircle(x, y, raqueteComprimento,raqueteAltura,xBolinha, yBolinha,raio);
  
  if (colidiu){
    velocidadexBolinha *= -1;
  }
}

 function movimentaRaqueteOponente(){
   velocidadeYOponente = yBolinha - yRaqueteOponente- raqueteComprimento /2 - 30;
   yRaqueteOponente +=velocidadeYOponente
 }

 function incluiPlacar (){
   stroke(225);
   textAlign(CENTER);
   textSize(16);
   fill(color(225, 140, 0))
   rect(150, 10, 40, 20);
   fill(255);
   text(meusPontos,170, 26 );
   fill(color(225, 140, 0))
   rect(450,10, 40 ,20)
   fill(255);
   text(pontosDoOponente,470, 26);
  
  
 }

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if(xBolinha < 10){
    pontosDoOponente += 1;
  }
}
