function Trocaemoji(e) {
    var obj = document.getElementById("empji");
    if (e == 1) {
        obj.setAttribute("class", "ei");
    }else if (e == 2){
obj.setAttribute("class", "e2");

    } else if (E == 3) {
        obj.setAttribute("class", "e3");
    }
}
function removeEmoji() {
    var obj = document.getElementById("emoji")
    obj.removeAttribute("class")
}
function verificar() {
    var obj = document.getElementById("emoji")
    if (obj.hasAttribute("class")) {
        alert("atributo class está na tag")
    }else{
        alert("Sem atributo class")
    }
}