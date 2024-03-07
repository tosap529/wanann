<?php

include("connect_test.php");
// include("connect.php");

session_start();

// echo $_SESSION["isLogin"];

// if($_SESSION["isLogin"] != null){
// $memberID = $_SESSION["isLogin"];
$pdo = getPDO();
// $statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement = $pdo->prepare("select * from MEMBER where ID= 1");
// $statement->bindValue(":id",  $_SESSION["isLogin"]);
$statement ->execute();

$memberAllData['userData'] = $statement->fetch();


// $pdo = getPDO();
// $statement = $pdo->prepare("select * from SERVICE_ORDER where MEMBER_ID= 1");
$statement = $pdo->prepare("select * from SERVICE_ORDER o 
join SERVICE_RESERVE_TIME srt on o.SERVICE_RESERVE_TIME_ID = srt.ID
join RESERVE_TIME rt on srt.RESERVE_TIME_ID = rt.ID
where o.MEMBER_ID=1");
$statement ->execute();
$memberAllData['sOrder'] = $statement->fetchAll();

$statement = $pdo->prepare("select * from PRODUCT_ORDER where MEMBER_ID= 1");
$statement ->execute();
$memberAllData['mOrder'] = $statement->fetchAll();
// print_r($statement);
// echo "接收成功";
echo json_encode($memberAllData);

// }else{
//     echo '找不到會員資料';
// }


?>