//funcion que aplica el estilo a la opcion seleccionada en el menu y quita la previamente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}
//funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className === ""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de las barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
};

//funcion que aplica a la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("angular").classList.add("barra-progreso4");
        document.getElementById("reparacion").classList.add("barra-progreso5");
    }
}