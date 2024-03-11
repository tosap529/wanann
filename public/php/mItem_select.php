<?php
include("connect.php");


$pdo = getPDO();

$statement = $pdo->prepare("SELECT * FROM PRODUCT WHERE ID = :productId");

// $statement ->bindValue(":id",  $reqBody['id']);
$statement ->bindValue(":productId",  $reqBody['productId']);

$statement ->execute();
$act = $statement->fetchAll();


echo json_encode($act);

?>


