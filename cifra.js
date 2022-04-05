var texto = document.querySelector('.textoCript').value.toLowerCase().split('');
var tamanhoFrase = texto.length;
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


function criptografar(){
    
    for(var i = 0; i < texto .length; i++){
        var letra = texto[i];
        if (letra === " "){
            texto = `${texto} `;
        }else{
            for(let j = 0; j < alphabet.length; j++){
                if(texto[i] == alphabet[j]){
                    if(shift > 26) if(shift > 52){
                        var control = true;
                        var contador = 1;

                        while(controle){
                            var novoAlfabeto = new[];
                            for(let j = 0; j < alphabet.length; j++){
                                shift = shift + contador * 26
                                novoaAlfabeto.set(shift)
                            }
                            if (novoAlfabeto.get(shift) != undefined){
                                texto += novoAlfabeto[j + shift]
                                control = false;
                            } 

                            contador += 1;
                        }

                    }else{
                        // texto = `${texto}${alphabet.get(text + shift)}`;
                        texto += alphabet[j + shift]
                    }
                }
            }
        }
    }
}