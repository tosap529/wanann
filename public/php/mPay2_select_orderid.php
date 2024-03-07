<?php
// 本機測試
// include("connect_test.php");

// 上伺服器
include("connect.php");

$pdo = getPDO();


$statement = $pdo->prepare("
    SELECT 
        ID 
    FROM 
        PRODUCT_ORDER
    order by 
        ID desc;
");


$statement ->execute();
$act = $statement->fetchAll();

echo json_encode($act);

?>