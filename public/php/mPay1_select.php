<?php
include("connect.php");

$pdo = getPDO();

$statement = $pdo->prepare("
    select 
        ID,
        COUPON_PRICE,
        COUPON_ID
    from 
        ACTIVITY
");


$statement ->execute();
$act = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($act);

?>