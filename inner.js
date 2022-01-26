function clicar1() {
  var bumbo = window.document.getElementById('bumbo')
  var espaco = window.document.getElementById('um')
  
  bumbo.play()

}
function clicar2() {
  var surdo = window.document.getElementById('surdo')
  var dois = window.document.getElementById('dois')
  
  surdo.play()

}
function clicar3() {
  var ton1 = window.document.getElementById('ton1')
  var tres = window.document.getElementById('tres')
  
  ton1.play()

}
function clicar4() {
  var ton2 = window.document.getElementById('ton2')
  var espaco = window.document.getElementById('um')
  
  ton2.play()

}
function clicar5() {
  var caixa = window.document.getElementById('caixa')
  var espaco = window.document.getElementById('um')
  
  caixa.play()

}
function clicar6() {
  var chimball = window.document.getElementById('chimball')
  var espaco = window.document.getElementById('um')
  
  chimball.play()

}
function clicar7() {
  var prato = window.document.getElementById('prato')
  var espaco = window.document.getElementById('um')
  
  prato.play()

}
document.onkeydown = teclado;
function teclado (e) {
  if (e.keyCode == 32){
    bumbo.play() 

  } else if (e.keyCode == 65){
    surdo.play()

  } else if (e.keyCode == 87){
    ton1.play()

  } else if (e.keyCode == 68){
    ton2.play()

  } else if (e.keyCode == 74){
    caixa.play()

  } else if (e.keyCode == 75){
    chimball.play() 

  } else if (e.keyCode == 76){
    prato.play() 
    
  } else{

  }

  
} 