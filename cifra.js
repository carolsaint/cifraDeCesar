document.querySelector(".submitBtn").addEventListener("click", submit);

function criptografar(texto){
  var textoCriptografado = "";
  var shift = parseInt(document.querySelector('.shift').value);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // var alphUp = alphabet.map(p => p.toUpperCase());

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
return textoCriptografado
}


function decriptografar(texto){
  var textoDecriptografado = "";
  var shift = parseInt(document.querySelector('.shift').value);
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


  for (var i = 0; i < texto.length; i++) {
  var letra = texto[i];
  if (letra === " ") {
    textoDecriptografado += letra;
  } else {
    var indice = parseInt(letra.charCodeAt() - 97 - (shift % 26));
    console.log(indice)
    if (indice < 0) {
      indice += 26;
      console.log(indice)
    }
    textoDecriptografado += alphabet[indice];
    console.log(textoDecriptografado)
  }
}
console.log(textoDecriptografado);
return textoDecriptografado
}




document.querySelector('#container').addEventListener('submit', function(event){
    event.preventDefault();
}) 

var selecao = document.querySelector("#options");
selecao.addEventListener("change", function(){
    if(selecao.value == "0"){
      var shift = document.querySelector('.shift').style.visibility = "visible";
    }else{
      var shift = document.querySelector('.shift').style.visibility = "hidden";

    }
})

function submit(){
  var texto = document.getElementById('textInput').value.toLowerCase();
  var opt1 = document.querySelector('input[name="cifra"]:checked').value;
  var output = document.querySelector('.textOutput')


  var selecao = document.querySelector("#options").value;
  if(selecao == "0"){
    if (opt1 == "1") {
      var textoCriptografado = criptografar(texto);
      output.value = textoCriptografado;
    }else{
      var textoDecriptografado = decriptografar(texto);
      output.value = textoDecriptografado;
    }
  }else{
    if(opt1 == "1"){
      texto = document.getElementById('textInput').value;
      output.value = btoa(texto);
    }else{
      texto = document.getElementById('textInput').value;
      console.log("teste")
      output.value = atob(texto);
    }
  }
}

