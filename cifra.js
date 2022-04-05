function criptografar(){
    var texto = document.querySelector('.textInput').value.toLowerCase();
    var textoCriptografado = "";
    var shift = document.querySelector('.shift').value;
    
    console.log(texto);
    console.log(shift);
    
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    console.log(textoCriptografado);

for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    if (letra === " ") {
      textoCriptografado += letra;
    } else {
      var indice = letra.charCodeAt() - 97 + shift;
      if (indice > 25) {
          var help = parseInt(indice / 26);
        indice = indice - (help * 26);
      }
      textoCriptografado += alphabet[indice];
    }
  }
  console.log(textoCriptografado);

  return textoCriptografado
}


var iniciar = document.querySelector("#submitBtn");
var opt1 = document.querySelector('.cryptButton');
var opt2 = document.querySelector('.decryptButton');
var output = document.querySelector('.encoded-text')


iniciar.addEventListener('click', function () {
    if(opt1.checked == true){
        var textoCriptografado = criptografar();
        output.value = textoCriptografado;
    }else if(opt2.checked == true){
    
    }
});

document.querySelector('#container').addEventListener('submit', function(event){
    event.preventDefault();
}) 







// base64
// btoa()
// atob()