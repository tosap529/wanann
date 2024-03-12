<?php

include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("update PRODUCT_ORDER  set ORDER_STATUS = :order_status, RANK_STATUS = :rank_status where ID = :id");

$statement->bindValue(":order_status", $reqBody["order_status"]);
$statement->bindValue(":rank_status", $reqBody["rank_status"]);
$statement->bindValue(":id", $reqBody["id"]);



$statement->execute();

json_encode($statement);

?>