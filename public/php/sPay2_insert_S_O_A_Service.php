<?php
// 本機測試
include("connect.php");

$pdo = getPDO();

$reqBody = json_decode(file_get_contents("php://input"), true);
$orderItems = $reqBody['SERVICE_ORDER_ADD_SERVICE'];

foreach ($orderItems as $item) {
    $statement = $pdo->prepare("
        INSERT INTO `SERVICE_ORDER_ADD_SERVICE` 
        (`SERVICE_ORDER_ID`, `ADD_SERVICE_ID`)
        VALUES (:serviceOrderId, :addServiceId);
    ");


    $statement->bindValue(":serviceOrderId", $item["SERVICE_ORDER_ID"]);
    $statement->bindValue(":addServiceId", $item["ADD_SERVICE_ID"]);
    $statement->execute();
}

echo "服務訂單提交成功";


?>