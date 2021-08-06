function agregarNuevoGasto(){
    $.ajax({
        type:"POST",
        data:$('#frmAgregarGasto').serialize(),
        url:"../procesos/gastos/agregarNuevoGasto.php",
        success:function(resultado) {
            resultado = resultado.trim();

            if (resultado == 1) {
                $('#frmAgregarGasto')[0].reset();
                Swal.fire(":D","Agregado con exito!","success");
                $('#tablaGastosLoad').load("gastos/tablaGastos.php");
            } else {
                Swal.fire(":(","Error al agregar" + resultado,"error");
            }
        }
    });

    return false;
}
function eliminarGasto(id_categoria){
    $.ajax({
                type:"POST",
                data: "id_categoria="+id_categoria,
                url:"../procesos/gastos/eliminarGastos.php",
                success:function(resultado) {
                    resultado = resultado.trim();
                    if (resultado == 1) {
                        $('#tablaGastosLoad').load("gastos/tablaGastos.php");
                        swal.fire(":D","eliminado con exito!","success");
                    } else {
                        swal.fire(":(","No se pudo eliminar! " + resultado, "error");
                    }
                }
            });
            return false;
        } 

function actualizarGasto(){
    $.ajax({
        type:"POST",
        data: $('#frmActualizarGasto').serialize(),
        url: "../procesos/gastos/actualizarGasto.php",
        success:function(resultado) {
            resultado = resultado.trim();
            if (resultado == 1) {
                $('#frmAgregarGasto')[0].reset();
                Swal.fire(":D","Actualizado con exito!","success");
                $('#tablaGastosLoad').load("gastos/tablaGastos.php");
            } else {
                Swal.fire(":(","Error al actualizar" + resultado, "error");
            }
        }
    });
    return false;
}
function obtenerDato(idgastos) {

    $.ajax({
        type:"POST",
        data:"idgastos=" + idgastos,
        url:"../procesos/gastos/obtenerDatos.php",
        success:function(resultado) {
            $('#id_gasto').val(resultado['id_gasto']);
            $('#montoU').val(resultado['monto']);
            $('#descripcionU').val(resultado['descripcion']);
            $('#fechaU').val(resultado['fecha']);
            $('#idCategoriaU').val(resultado['id_categoria']);
        }
    });
}