<?php

include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from ARTICLE order by CREATE_TIME desc");
$statement ->execute();
$article = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($article);

?>