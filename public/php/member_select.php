<?php

include("connect_test.php");
// include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from MEMBER where ID=1");
$statement ->execute();
$member = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($member);

?>