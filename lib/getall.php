<?php
    include('./conn.php');

    // var_dump($mysqli);die;
    $sql = "select * from product";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>