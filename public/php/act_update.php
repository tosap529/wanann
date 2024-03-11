<?php

include("connect_test.php");
// include("connect.php");

$reqBody = json_decode(file_get_contents("php://input"), true);

$pdo = getPDO();
$statement = $pdo->prepare("update ACTIVITY set STATUS = :status, TITLE = :title, PIC = :pic, CONTENT = :content, CREATE_TIME = :createTime, DEADLINE = :deadline, CATEGORY = :category, COUPON_PRICE = :couponPrice, COUPON_ID = :couponId where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->bindValue(":title", $reqBody["title"]);
$statement->bindValue(":pic", $reqBody["pic"]);
$statement->bindValue(":content", $reqBody["content"]);
$statement->bindValue(":createTime", $reqBody["createTime"]);
$statement->bindValue(":deadline", $reqBody["deadline"]);
$statement->bindValue(":category", $reqBody["category"]);
$statement->bindValue(":couponPrice", $reqBody["couponPrice"]);
$statement->bindValue(":couponId", $reqBody["couponId"]);

$statement->execute();

json_encode($statement);
?>