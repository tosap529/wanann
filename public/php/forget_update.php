<?php
// include("connect_test.php");
include("connect.php");

$pdo = getPDO();

$statement = $pdo->prepare("update MEMBER set PASSWORD = :pwd where ID=:id");

$statement ->bindValue(":id",  $reqBody['id']);
$statement ->bindValue(":pwd",  $reqBody['pwd']);

$statement ->execute();

?>