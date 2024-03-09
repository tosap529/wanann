<?php
include("connect_test.php");
// include("connect.php");
print_r($reqBody) ;
$pdo = getPDO();
// 上線用
// $statement = $pdo->prepare("update MEMBER set MEMBER_PIC = '".$fileNewName."' where ID=1");
// 測試用
$statement = $pdo->prepare("
    update MEMBER
    set 
        NAME = :name,
        PHONE = :phone,
        EMAIL = :email,
        COUNTY = :county,
        DISTRICT = :district,
        SEND_ADDRESS = :send_address,
        SERVICE_ADDRESS = :service_address,
        PASSWORD = :password
    where ID=:id");
// $statement = $pdo->prepare("update MEMBER set MEMBER_PIC = '".$fileTestPath."' where ID=9");

$statement ->bindValue(":id",  $reqBody['id']);
$statement ->bindValue(":name",  $reqBody['name']);
$statement ->bindValue(":phone",  $reqBody['phone']);
$statement ->bindValue(":email",  $reqBody['email']);
$statement ->bindValue(":county",  $reqBody['county']);
$statement ->bindValue(":district",  $reqBody['district']);
$statement ->bindValue(":send_address",  $reqBody['send_address']);
$statement ->bindValue(":service_address",  $reqBody['service_address']);
$statement ->bindValue(":password",  $reqBody['password']);
$statement ->execute();
// $member = $statement->fetchAll();
?>