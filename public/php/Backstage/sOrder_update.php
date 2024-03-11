<?php

include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("update SERVICE_COMMENT  set ORDER_STATUS = :order_status where ID = :id");

$statement->bindValue(":order_status", $reqBody["order_status"]);
$statement->bindValue(":id", $reqBody["id"]);



$statement->execute();

json_encode($statement);

?>