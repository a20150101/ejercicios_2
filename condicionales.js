alert("Bienvenido a la pagina de javascript");
var nom = prompt("Ingrese su nombre y apellido");
var res1 = prompt("¿Como se llama el primer dia de la Primavera?\n A: Primer Dia de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de invierno");
if(res1=="B"){
    res1 = 25;
}else{
    res1 = 0;
};

var res2 = promp("¿Que sucede en el polo norte cuando llega la primaver\nA:6 mesesde luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC:6 meses de alternancia de luz y oscuridad")
if(res2 =="A"){
    res2 = 25;
}else{
    res2 = 0;    
}

var res3 = promp("¿Que sucede en el polo norte cuando llega la primaver\nA:6 mesesde luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC:6 meses de alternancia de luz y oscuridad")
if(res3 =="A"){
    res3 = 25;
}else{
    res3 = 0;    
}

var res4 = promp("¿Que sucede en el polo norte cuando llega la primaver\nA:6 mesesde luz diurna ininterrumpida\nB: 6 meses de oscuridad ininterrumpida\nC:6 meses de alternancia de luz y oscuridad")
if(res4 =="A"){
    res4 = 25;
}else{
    res4 = 0;    
}
var total = res1 + res2 +res3 +res4 
      
document.write("<h1>Condicionales</h1>");
document.write("Respuestas<br>");
document.write(nom +  "Tus resultados son<br");
document.write(total + "% de respuewstas correctas")