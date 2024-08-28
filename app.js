function criptografar() {
    let texto = document.getElementById("inputText").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("alerta1").innerText = textoCriptografado;
    document.getElementById("alerta2").innerText = "";

    var paragrafo = document.querySelector(".programa_texto_codificado");
    var imagem = paragrafo.querySelector(".imagem_boneca");

    console.log(imagem)

    // Remove a imagem, se ela existir
    if (imagem) {
        paragrafo.removeChild(imagem);
    }
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("alerta1").innerText = textoDescriptografado;
    document.getElementById("alerta2").innerText = "";
    
}