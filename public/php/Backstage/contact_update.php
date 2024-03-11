<?php

include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("update CONTACT_TABLE set STATUS = :status, NAME = :name, PHONE = :phone, EMAIL = :email, CONTENT = :content, CREATE_TIME = :createTime where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->bindValue(":phone", $reqBody["phone"]);
$statement->bindValue(":email", $reqBody["email"]);
$statement->bindValue(":content", $reqBody["content"]);
$statement->bindValue(":createTime", $reqBody["createTime"]);
$statement->bindValue(":name", $reqBody["name"]);
$statement->execute();

json_encode($statement);

?>