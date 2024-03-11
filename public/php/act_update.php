<?php

include("connect_test.php");
// include("connect.php");

$reqBody = json_decode(file_get_contents("php://input"), true);

$pdo = getPDO();
$statement = $pdo->prepare("update ACTIVITY set STATUS = :status where ID = :id");
$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->execute();

json_encode($statement);

?>