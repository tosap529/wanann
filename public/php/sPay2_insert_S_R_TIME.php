<?php
// 本機測試
include("connect.php");

$pdo = getPDO();


$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);


$statement = $pdo->prepare("
    INSERT INTO SERVICE_RESERVE_TIME(`SERVICE_ID`, `RESERVE_TIME_ID`)
    VALUES (:serviceId, :reserveTimeId);
");

$statement->bindValue(":serviceId", $reqBody["SERVICE_ID"]);
$statement->bindValue(":reserveTimeId", $reqBody["RESERVE_TIME_ID"]);


$statement->execute();

// echo "訂單提交成功";

// 傳回本次資料新家資料的ID給前端
$lastInsertId = $pdo->lastInsertId();

echo $lastInsertId;

// $pdo = getPDO();
//     $statement = $pdo->prepare("
//         select ID 
//         from SERVICE_RESERVE_TIME
//         order by ID desc
//         limit 1");
//     $statement ->execute();
//     $actID = $statement->fetch();
    
//     echo $actID['ID'];

?>







