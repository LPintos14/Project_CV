document.getElementById("cv").addEventListener('click',function(){
    console.log("Bienvenidos a mi pagina cv")
    document.getElementById("pagina").style.display="block";
    document.getElementById("cv").style.display="none"
    document.getElementById("portada").style.display="none"
})

document.getElementById("botondatos").addEventListener('click',function(){
    console.log("Estos son mis datos personales");
    document.getElementById("datos").style.display="block";
    document.getElementById("datos").style.margin="1em"
})

document.getElementById("botonexp").addEventListener('click',function(){
    console.log("Aca van a encontrar mi formacion y mi experiencia");
    document.getElementById("formacion").style.display="block";
})

document.getElementById("botonhabi").addEventListener('click',function(){
    console.log("Las habilidades que pueden ser relevantes");
    document.getElementById("habilidades").style.display="block";
})

document.getElementById("sobremi").addEventListener('click',function(){
    console.log("Les cuento un poco sobre mi");
    document.getElementById("historia").style.display="block";
    document.getElementById("final").style.display="block";
})

document.getElementById("final").addEventListener('click',function(){
    console.log("Muchas Gracias por ver mi pagina")
    document.body.style.height="100px"
    document.getElementById("pagina").style.display="none"
    document.getElementById("fotofinal").style.display="block"
    document.body.style.backgroundImage="none"
    document.getElementById("denuevo").style.display="block"
})
document.getElementById("denuevo").addEventListener('click',function(){
    console.log("Empecemos desde el principio")
    document.body.style.display="block"
    document.getElementById("fotofinal").style.display="none"
    document.getElementById("denuevo").style.display="none"
    document.getElementById("cv").style.display="block"
    document.body.style.backgroundImage="linear-gradient(lightgreen,greenyellow,green)"
    document.body.style.backgroundAttachment = "fixed";
    document.getElementById("portada").style.display="block"
    document.getElementById("datos").style.display="none";
    document.getElementById("formacion").style.display="none"
    document.getElementById("historia").style.display="none"
    document.getElementById("habilidades").style.display="none";
    document.getElementById("final").style.display="none"
})