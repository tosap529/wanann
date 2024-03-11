<?php

// include("connect_test.php");
include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from ARTICLE where CATEGORY = '浣安小品' and STATUS = 1 order by CREATE_TIME desc limit 1 ");
$statement ->execute();
$articlesWanann = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($articlesWanann);

?>