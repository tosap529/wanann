<?php

include("connect_test.php");

$pdo = getPDO();


// $content = trim(file_get_contents("php://input"));
// $reqBody = json_decode($content, true);


$statement = $pdo->prepare("
    INSERT INTO PRODUCT_ORDER (ADDRESSEE_NAME, ADDRESSEE_PHONE, ADDRESSEE_ADDRESS, ORDER_DATE)
    VALUES (:recipientName, :recipientPhone, :address, NOW())
");


$statement->bindValue(":recipientName", $reqBody["recipientName"]);
$statement->bindValue(":recipientPhone", $reqBody["recipientPhone"]);
$statement->bindValue(":address", $reqBody["address"]);
// $statement->bindValue(":totalPrice", $reqBody["totalPrice"]);

$statement->execute();



echo "訂單提交成功";

?>