<?php
include("connect_test.php");

$pdo = getPDO();

$statement = $pdo->prepare("update MEMBER set MEMEBER_PIC = '".$fileTestPath."' where ID=9");
$statement ->execute();
$member = $statement->fetchAll();
?>