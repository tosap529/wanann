<?php
include("connect_test.php");

$pdo = getPDO();    
// $statement = $pdo->prepare("insert into MEMBER(NAME,PHONE,EMAIL,SEND_ADDRESS,SERVICE_ADDRESS, CREATE_TIME,USERNAME, PASSWORD,  STATUS,MEMBER_PIC) values(:name, :phone, :email, :send_address, :service_address,  NOW(),:username, :password, b'0',:member_pic)");
$statement = $pdo->prepare("insert into MEMBER(NAME,PHONE,EMAIL,SEND_ADDRESS,SERVICE_ADDRESS, CREATE_TIME,USERNAME, PASSWORD,  STATUS) values(:name, :phone, :email, :send_address, :service_address,  NOW(),:username, :password, b'0')");
$statement ->bindValue(":name", $reqBody["name"]);
$statement ->bindValue(":phone", $reqBody["phone"]);
$statement ->bindValue(":email", $reqBody["email"]);
$statement ->bindValue(":send_address", $reqBody["send_address"]);
$statement ->bindValue(":service_address", $reqBody["service_address"]);
$statement ->bindValue(":username", $reqBody["username"]);
$statement ->bindValue(":password", $reqBody["password"]);
// $statement ->bindValue(":member_pic", $reqBody["member_pic"]);

$statement ->execute();

// print_r($statement);

echo "註冊成功";


?>