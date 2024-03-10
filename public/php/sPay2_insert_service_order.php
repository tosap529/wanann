
<?php
include("connect_test.php"); // 確保這裡的路徑是正確的

$pdo = getPDO();

$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);

$statement = $pdo->prepare("
    INSERT INTO `Wanann_database`.`SERVICE_ORDER` (
        `SERVICE_PHONE`, `ORDER_DATE`, `SERVICE_ADDRESS`, 
        `SERVICE_DATE`, `PAYMENT`, `ORDER_STATUS`, 
        `RANK_STATUS`, `MEMBER_ID`, `SERVICE_COMMENT_ID`, 
        `SERVICE_RESERVE_TIME_ID`, `ACTIVITY_ID`
    ) VALUES (
        :servicePhone, now(), :serviceAddress, 
        :serviceDate, '1', '0', 
        '1', :memberId, :serviceCommentId, 
        :serviceReserveTimeId, :activityId
    );
");

$statement->bindValue(":servicePhone", $reqBody["SERVICE_PHONE"]);
$statement->bindValue(":serviceAddress", $reqBody["SERVICE_ADDRESS"]);
$statement->bindValue(":memberId", $reqBody["MEMBER_ID"]);
$statement->bindValue(":serviceCommentId", $reqBody["SERVICE_COMMENT_ID"]);
$statement->bindValue(":serviceReserveTimeId", $reqBody["SERVICE_RESERVE_TIME_ID"]);
$statement->bindValue(":activityId", $reqBody["ACTIVITY_ID"]);
$statement->bindValue(":serviceDate", $reqBody["SERVICE_DATE"]);

    $statement->execute();
    echo $pdo->lastInsertId();

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

