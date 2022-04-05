var textoCriptografado = ""
var texto = "the quick brown fox jumps over the lazy dog".split("").forEach(function (item) { textoCriptografado += item === " " ? item : String.fromCharCode(item.charCodeAt() + (1 % 26) - (item.charCodeAt() + (1 % 26) > 122 ? 26 : 0) ) });
console.log(textoCriptografado);
