<?php
// 本機測試
// include("connect_test.php");

// 上伺服器
include("connect.php");

$pdo = getPDO();


$statement = $pdo->prepare("
    select 
        ID,
        COUNTY,
        DISTRICT,
        SEND_ADDRESS,
        SERVICE_ADDRESS
    from 
        MEMBER
");


$statement ->execute();
$act = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($act);

?>