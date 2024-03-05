<?php


include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("update ACTIVITY set STATUS = :status where ID = :id");
$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->execute();

echo json_encode($statement);

?>