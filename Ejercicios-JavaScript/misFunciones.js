/**
 * Conversor de Unidades (Metros,Pies,Pulgadas,Yardas)
 * @method convertirUnidades
 * @param {string} id - id del elemento input del html
 * @param {number} valor - contiene el valor del input que ingreso el usuario
 */

convertirUnidades = (id, valor) => {
    let metros, pulgadas, pie, yardas;

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
    document.LasUNidades.unid_pie.value = pie;
    document.LasUNidades.unid_yarda.value = yardas;
    document.LasUNidades.unid_pulgada.value = pulgadas;
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
    //Agregar verificacion de letras
    let resultado, num1, num2;
    num1 = Number(document.operacionesMat.sum_num1.value)
    num2 = Number(document.operacionesMat.sum_num2.value)

    resultado = num1 + num2 ;
    document.operacionesMat.sum_total.value = resultado;
}