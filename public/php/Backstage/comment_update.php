<?php

include("../connect_test.php");
// include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("update SERVICE_COMMENT set STATUS = :status where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
// $statement->bindValue(":title", $reqBody["title"]);
// $statement->bindValue(":pic", $reqBody["pic"]);
// $statement->bindValue(":content", $reqBody["content"]);
// $statement->bindValue(":createTime", $reqBody["createTime"]);
// $statement->bindValue(":category", $reqBody["category"]);
// $statement->bindValue(":summernote", $reqBody["summernote"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->execute();

json_encode($statement);

?>