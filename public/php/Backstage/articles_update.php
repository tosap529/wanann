<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("update ARTICLE set STATUS = :status, TITLE = :title, PIC = :pic, CONTENT = :content, CREATE_TIME = :createTime, CATEGORY = :category, SUMMERNOTE = :summernote where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":title", $reqBody["title"]);
$statement->bindValue(":pic", $reqBody["pic"]);
$statement->bindValue(":content", $reqBody["content"]);
$statement->bindValue(":createTime", $reqBody["createTime"]);
$statement->bindValue(":category", $reqBody["category"]);
$statement->bindValue(":summernote", $reqBody["summernote"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->execute();


?>