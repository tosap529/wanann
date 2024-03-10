<?php
// 本機測試
include("connect_test.php");

// 上伺服器
// include("connect.php");

$pdo = getPDO();


$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);


$statement = $pdo->prepare("
    INSERT INTO `Wanann_database`.`PRODUCT_ORDER` 
    (`ADDRESSEE_NAME`, `ADDRESSEE_PHONE`, `ORDER_DATE`, `ADDRESSEE_ADDRESS`, `PAYMENT`, `ORDER_STATUS`, `MEMBER_ID`, `ACTIVITY_ID`)
    VALUES (:addresseeName, :addresseePhone, NOW(), :addresseeAddress, :payment, :orderStatus, :memberId, :activityId)
");


$statement = $pdo->prepare("
    INSERT INTO `Wanann_database`.`SERVICE_RESERVE_TIME` (`SERVICE_ID`, `RESERVE_TIME_ID`)
    VALUES ('5', '1');
");

$statement->bindValue(":addresseeName", $reqBody["ADDRESSEE_NAME"]);
$statement->bindValue(":addresseePhone", $reqBody["ADDRESSEE_PHONE"]);

$statement->execute();

// echo "訂單提交成功";

// 傳回本次資料新家資料的ID給前端
$lastInsertId = $pdo->lastInsertId();

echo $lastInsertId;

?>





