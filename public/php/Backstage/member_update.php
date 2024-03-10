<?php

include("../connect_test.php");


$pdo = getPDO();
$statement = $pdo->prepare("update MEMBER set STATUS = :status where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
// $statement->bindValue(":phone", $reqBody["phone"]);
// $statement->bindValue(":email", $reqBody["email"]);
// $statement->bindValue(":content", $reqBody["content"]);
// $statement->bindValue(":createTime", $reqBody["createTime"]);
// $statement->bindValue(":name", $reqBody["name"]);
$statement->execute();

json_encode($statement);

?>