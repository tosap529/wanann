<?php
include("connect.php");

$pdo = getPDO();


$statement = $pdo->prepare("select * from PRODUCT where STATUS = 1");


$statement ->execute();
$act = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($act);

?>

