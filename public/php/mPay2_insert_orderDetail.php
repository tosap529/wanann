<?php
include("connect.php");

$pdo = getPDO();

$reqBody = json_decode(file_get_contents("php://input"), true);
$orderItems = $reqBody['orderItemDetail'];

foreach ($orderItems as $item) {
    $statement = $pdo->prepare("
        INSERT INTO `Wanann_database`.`PRODUCT_ORDER_DETAIL` 
        (`QUANTITY`, `PRODUCT_ID`, `PRODUCT_ORDER_ID`) 
        VALUES (:quantity, :productId, :productOrderId);
    ");

    $statement->bindValue(":quantity", $item["QUANTITY"]);
    $statement->bindValue(":productId", $item["PRODUCT_ID"]);
    $statement->bindValue(":productOrderId", $item["PRODUCT_ORDER_ID"]);
    $statement->execute();
}

echo "訂單商品提交成功";


?>