<?php

include("connect_test.php");
// include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from ACTIVITY where CATEGORY = '優惠活動' and STATUS = 1 order by CREATE_TIME desc");
$statement ->execute();
$act = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($act);

?>