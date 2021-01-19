function alterarOpc(el){
    var opcs = document.getElementById('menu').children;
    for(var i = 0; i < opcs.length; i++){
        opcs[i].className = "opc";
    }
    el.className = "ativo";
}