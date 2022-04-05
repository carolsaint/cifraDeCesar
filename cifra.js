function criptografar(){
    var texto = document.getElementById('textInput').value.toLowerCase();
    var textoCriptografado = "";
    var shift = parseInt(document.querySelector('.shift').value);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

    for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    if (letra === " ") {
      textoCriptografado += letra;
    } else {
      var indice = parseInt(letra.charCodeAt() - 97 + shift);
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


var iniciar = document.querySelector('.submitBtn');
var opt1 = document.querySelector('.cryptButton');
var opt2 = document.querySelector('.decryptButton');
var output = document.querySelector('.textOutput')

document.querySelector('#container').addEventListener('submit', function(event){
    event.preventDefault();
}) 

iniciar.addEventListener('click', function () {
    if(opt1.checked === true){
        var textoCriptografado = criptografar();
        output.value = textoCriptografado;
    }else if(opt2.checked == true){
        var textoDecriptografado = decriptografar();
        output.value = textoDecriptografado;
    }
});




function decriptografar(){
  var texto = document.getElementById('textInput').value.toLowerCase();
  var textoDecriptografado = "";
  var shift = parseInt(document.querySelector('.shift').value);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  for (var i = 0; i < texto.length; i++) {
  var letra = texto[i];
  if (letra === " ") {
    textoDecriptografado += letra;
  } else {
    var indice = parseInt(letra.charCodeAt() - 97 + shift *(-1));
    if (indice > 25) {
        var help = parseInt(indice / 26);
      indice = indice - (help * 26);
    }
    textoDecriptografado += alphabet[indice];
  }
}
console.log(textoDecriptografado);
return textoDecriptografado
}




function cript64(){
  // var texto = document.getElementById('textInput').value.toLowerCase();
  var texto = "hello"
  var textoCript64 = "";
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

 var textoCript64 = btoa(texto)

 console.log(textoCript64)
}

function decript64(){
  // var texto = document.getElementById('textInput').value.toLowerCase();
  var texto = "aGVsbG8="
  var textoDecript64 = "";
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

 var textoDecript64 = atob(texto)

 console.log(textoDecript64)


}
decript64()
cript64()