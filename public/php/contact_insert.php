<?php

include("connect_test.php");
// include("connect.php");


$pdo = getPDO();
$statement = $pdo->prepare("insert into CONTACT_TABLE(NAME, PHONE, EMAIL, CONTENT, CREATE_TIME, STATUS) values(:name, :phone, :email, :message, NOW(), b'0')");
$statement ->bindValue(":name", $reqBody["name"]);
$statement ->bindValue(":phone", $reqBody["phone"]);
$statement ->bindValue(":email", $reqBody["email"]);
$statement ->bindValue(":message", $reqBody["message"]);
$statement ->execute();

// print_r($statement);

// echo "註冊成功";

?>