
function areaRectangulo(){
    let base=parseFloat(document.getElementById("txtBase").value);
    let altura=parseFloat(document.getElementById("txtAltura").value);
    let resultado;

    if (!isNaN(base) && !isNaN(altura) ){
        resultado=base*altura;
        document.getElementById("lblResultado").innerText="El área del rectangulo es: "+ resultado
    }else{
        Swal.fire({
            title: "Favor validar datos",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK!"
          });
    }

}

function limpiar(){
    document.getElementById("txtBase").value=""
    document.getElementById("txtAltura").value=""
    document.getElementById("lblResultado").innerText=""
}