<?php

    include_once 'conectar.php';

    $sql_leer = 'select *from wp8y_comments';

    $gset = $pdo->prepare($sql_leer);
    $gset->execute();

    $resultados = $gset->fetchAll();

    var_dump($resultados);

?>