<?php

include("connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from ARTICLE where CATEGORY = '職人專訪' and STATUS = true order by CREATE_TIME desc");
$statement ->execute();
$articlesPro = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($articlesPro);

?>