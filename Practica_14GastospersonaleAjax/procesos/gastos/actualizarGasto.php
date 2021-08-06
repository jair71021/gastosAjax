<?php
include "../../clases/Gastos.php";
$Gastos = new Gastos();
$datos = array(
    "id_categoria"=>$_POST['idCategoriaU'],
    "monto"=>$_POST['montoU'],
    "descripcion"=>$_POST['descripcionU'],
    "fecha"=>$_POST['fechaU']
);

echo $Gastos->actualizarGasto($datos);
?>