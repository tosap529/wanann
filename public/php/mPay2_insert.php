<?php
include("connect.php");

$pdo = getPDO();

$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);


$statement = $pdo->prepare("
    INSERT INTO PRODUCT_ORDER
    (`ADDRESSEE_NAME`, `ADDRESSEE_PHONE`, `ORDER_DATE`, `ADDRESSEE_ADDRESS`, `PAYMENT`, `ORDER_STATUS`, `MEMBER_ID`, `ACTIVITY_ID`) 
    VALUES (:addresseeName, :addresseePhone, NOW(), :addresseeAddress, :payment, :orderStatus, :memberId, :activityId)
");

$statement->bindValue(":addresseeName", $reqBody["ADDRESSEE_NAME"]);
$statement->bindValue(":addresseePhone", $reqBody["ADDRESSEE_PHONE"]);
$statement->bindValue(":addresseeAddress", $reqBody["ADDRESSEE_ADDRESS"]);
$statement->bindValue(":payment", '1');
$statement->bindValue(":orderStatus", '0');
$statement->bindValue(":memberId", $reqBody["MEMBER_ID"]);
$statement->bindValue(":activityId", $reqBody["ACTIVITY_ID"]);
$statement->execute();

// echo "訂單提交成功";

// // 傳回本次資料新加資料的ID給前端
// $lastInsertId = $pdo->lastInsertId();

// echo $lastInsertId;



$pdo = getPDO();
    $statement = $pdo->prepare("
        select ID 
        from PRODUCT_ORDER
        order by ID desc
        limit 1");
    $statement ->execute();
    $actID = $statement->fetch();
    
    echo $actID['ID'];



?>








































<?php

// include("connect_test.php");

// $pdo = getPDO();


// // $content = trim(file_get_contents("php://input"));
// // $reqBody = json_decode($content, true);


// // $statement = $pdo->prepare("
// //     INSERT INTO PRODUCT_ORDER (ADDRESSEE_NAME, ADDRESSEE_PHONE, ADDRESSEE_ADDRESS, ORDER_DATE)
// //     VALUES (:recipientName, :recipientPhone, :address, NOW())
// // ");


// $statement = $pdo->prepare("
//     INSERT INTO `Wanann_database`.`PRODUCT_ORDER` (`ADDRESSEE_NAME`, `ADDRESSEE_PHONE`, `ORDER_DATE`, `ADDRESSEE_ADDRESS`, `PAYMENT`, `ORDER_STATUS`, `MEMBER_ID`, `ACTIVITY_ID`) 
//     VALUES ('1', '111', now(), '1111', '1111', 1, 1, 1);
// ");


// $statement->bindValue(":recipientName", $reqBody["ADDRESSEE_NAME"]);
// $statement->bindValue(":recipientPhone", $reqBody["ADDRESSEE_PHONE"]);
// $statement->bindValue(":address", $reqBody["address"]);
// // $statement->bindValue(":totalPrice", $reqBody["totalPrice"]);

// $statement->execute();



// echo "訂單提交成功";

?>

