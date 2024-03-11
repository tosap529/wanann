<?php

include("connect_test.php");
// include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("insert into ACTIVITY(TITLE, PIC, CONTENT, CREATE_TIME, DEADLINE, CATEGORY, COUPON_PRICE, COUPON_ID, STATUS) values(:title, :pic, :content, NOW(), :deadline, :category, :coupon_price, :coupon_id, :status)");
$statement ->bindValue(":status", $reqBody["status"]);
$statement ->execute();

// print_r($statement);

// echo "註冊成功";

?>