<?php

include("connect_test.php");
// include("connect.php");
session_start();

echo $_SESSION["isLogin"];
if($_SESSION["isLogin"] != null){
// $memberID = $_SESSION["isLogin"];
$pdo = getPDO();
$statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement->bindValue(":id",  $_SESSION["isLogin"]);
$statement ->execute();
$member = $statement->fetchAll();

// print_r($statement);

// echo "接收成功";
echo json_encode($member);
}else{
    echo '找不到會員資料';
}


?>