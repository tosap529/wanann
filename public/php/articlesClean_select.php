<?php

include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from ARTICLE where CATEGORY = '清潔小知識' and STATUS = 1 order by CREATE_TIME desc limit 1, 100");
$statement ->execute();
$articlesClean = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($articlesClean);

?>