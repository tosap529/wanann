<?php
// 本機測試
include("connect.php");

$pdo = getPDO();


$statement = $pdo->prepare("select * from ADD_SERVICE");


$statement ->execute();
$act = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($act);

?>