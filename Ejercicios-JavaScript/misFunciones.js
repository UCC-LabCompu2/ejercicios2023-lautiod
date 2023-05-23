/**
 * Conversor de Unidades (Metros,Pies,Pulgadas,Yardas)
 * @method convertirUnidades
 * @param {string} id - id del elemento input del html
 * @param {number} valor - contiene el valor del input que ingreso el usuario
 */

convertirUnidades = (id, valor) => {
    let metros, pulgadas, pie, yardas;

    if(valor.includes(",")){
        valor = valor.replace(",","."); //Cambia la "," por un "."
    }

    if (isNaN(valor)) {
        alert("ERROR: Ingresar solo números");
        metros = "";
        pulgadas = "";
        pie = "";
        yardas = "";
    } else if (id == "metro") {
        metros = valor;
        pulgadas = valor * 39.3701;
        pie = valor * 3.28084;
        yardas = valor * 1.09361;
    } else if (unidad == "pulgada") {
        pulgadas = valor;
        metros = valor * 0.0254;
        pie = valor * 0.08333;
        yardas = valor * 0.027778;
    } else if (unidad == "pie") {
        pie = valor;
        metros = valor * 0.3048;
        pulgadas = valor * 12;
        yardas = valor * 0.333333;
    } else if (unidad == "yarda") {
        yardas = valor;
        metros = valor * 0.9144;
        pulgadas = valor * 36;
        pie = valor * 3;
    }
    document.LasUNidades.unid_metro.value = metros;
    document.LasUNidades.unid_pie.value = Math.round(pie*100)/100; //Redondea a 2 cifras decimales
    document.LasUNidades.unid_yarda.value = yardas.toFixed(2); //Funciona solo con números
    document.LasUNidades.unid_pulgada.value = Number(pulgadas).toFixed(2); //En caso de que sea un string
}

/**
 * Conversor de Grados a Radianes o al revés (Metros,Pies,Pulgadas,Yardas)
 * @method convertirGR
 * @param {string} id - id del elemento input del html
 */
convertirGR = (id) => {
    let gr, rad;

    if (id == "grados") {
        gr = document.getElementById("grados").value;
        if(isNaN(gr)){
            gr = "";
        }
        document.getElementById("radianes").value = (gr * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        if(isNaN(rad)){
            rad = "";
        }
        document.getElementById("grados").value = (rad * 180) / Math.PI;
    }
}

/**
 * Muestra u oculta un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - id del elemento input del html
 */
let mostrar_ocultar = (id) => {
    if(id==="mostrarDiv"){
        document.getElementsByName("unDiv")[0].style.display = 'block';
    }else{
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}


/**
 * Suma dos elementos
 * @method sumar
 */
let sumar = () =>{
    //Verificacion de letras
    let resultado, num1, num2;
    num1 = Number(document.operacionesMat.sum_num1.value)
    num2 = Number(document.operacionesMat.sum_num2.value)

    resultado = num1 + num2 ;
    document.getElementById("totalS").innerHTML = resultado;
    document.operacionesMat.sum_total.value = resultado;
    //Completar los siguientes campos
}

let generarUrl = () => {
    const distancia = document.getElementById("distancia").value;
    const unidades = document.getElementsByName("unidades")[0].value;

    const urlCompleta = `segundaWeb.html#${distancia}#${unidades}`;
    window.open(urlCompleta);
}

let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#"); // Pasa de string a array

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;

}

let guardarLS = () => {
    const distancia = document.getElementById("distancia").value;
    const unidades = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidades);
    window.open("web2.html");
}

let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadesLS");
    console.log(distancia);
    console.log(unidad);
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirculoCuadrado = () =>{
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;

    // R e c t á n g u l o
    let margen = 5;
    ctx.fillRect(50+margen, yMax-100-margen, 20, 20);
    ctx.strokeStyle


    // C í r c u l o
    ctx.strokeStyle = "#20ffff";
    ctx.fillStyle = "#ff9b31";
    ctx.arc(xMax/2, yMax/2, 100, 0, 2 * Math.PI);
    ctx.stroke(); // Lineas
    ctx.fill(); // Relleno
}

let limparCanvas = () =>{
    let canvas = document.getElementById("myCanvas");
    canvas.width = canvas.width;
}
var bandera;
let dibujar = () => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if (bandera) {
        ctx.fillRect(0 + posX, 0 + posY, 15, 15);
        ctx.fill();
        ctx.fillStyle = "#71d9d9";
    }
}