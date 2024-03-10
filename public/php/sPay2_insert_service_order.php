<?php
// 本機測試
// include("connect_test.php");

// // 上伺服器
// // include("connect.php");

// $pdo = getPDO();


// $content = trim(file_get_contents("php://input"));
// $reqBody = json_decode($content, true);



// $statement = $pdo->prepare("
//     INSERT INTO `Wanann_database`.`SERVICE_ORDER` (`SERVICE_PHONE`, `ORDER_DATE`, `SERVICE_ADDRESS`, `SERVICE_DATE`, `PAYMENT`, `ORDER_STATUS`, `RANK_STATUS`, `MEMBER_ID`, `SERVICE_COMMENT_ID`, `SERVICE_RESERVE_TIME_ID`, `ACTIVITY_ID`) 
//     VALUES (servicePhone, now(), :serviceAddress, '2024-03-10', :payment,:orderStatus, :rankStatus, :memberId, :serviceCommentId, :serviceReserveTimeId, '1');
// ");

// $statement->bindValue(":servicePhone", $reqBody["SERVICE_PHONE"]);
// $statement->bindValue(":serviceAddress", $reqBody["SERVICE_ADDRESS"]);
// // $statement->bindValue(":serviceDate", $reqBody["SERVICE_DATE"]);

// $statement->bindValue(":payment", '1');
// $statement->bindValue(":orderStatus", '1');
// $statement->bindValue(":rankStatus", '1');

// $statement->bindValue(":memberId", $reqBody["MEMBER_ID"]);
// $statement->bindValue(":serviceCommentId", $reqBody["SERVICE_COMMENT_ID"]);
// $statement->bindValue(":serviceReserveTimeId", $reqBody["SERVICE_RESERVE_TIME_ID"]);
// $statement->bindValue(":activityId", $reqBody["ACTIVITY_ID"]);
// $statement->execute();

// // echo "訂單提交成功";

// // 傳回本次資料新家資料的ID給前端
// $lastInsertId = $pdo->lastInsertId();

// echo $lastInsertId;

?>

<?php
include("connect_test.php"); // 確保這裡的路徑是正確的

$pdo = getPDO();

$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);

// 檢查解析是否成功
// if ($reqBody === null) {
//     error_log("JSON 解析失敗: " . json_last_error_msg());
//     echo "錯誤：數據無效";
//     exit;
// }

// 檢查所有必要的字段是否存在
// $requiredFields = ["SERVICE_PHONE", "SERVICE_ADDRESS", "MEMBER_ID", "SERVICE_COMMENT_ID", "SERVICE_RESERVE_TIME_ID", "ACTIVITY_ID"];
// foreach ($requiredFields as $field) {
//     if (!isset($reqBody[$field])) {
//         error_log("缺少必要的字段: " . $field);
//         echo "錯誤：缺少必要的字段 " . $field;
//         exit;
//     }
// }

$statement = $pdo->prepare("
    INSERT INTO `Wanann_database`.`SERVICE_ORDER` (
        `SERVICE_PHONE`, `ORDER_DATE`, `SERVICE_ADDRESS`, 
        `SERVICE_DATE`, `PAYMENT`, `ORDER_STATUS`, 
        `RANK_STATUS`, `MEMBER_ID`, `SERVICE_COMMENT_ID`, 
        `SERVICE_RESERVE_TIME_ID`, `ACTIVITY_ID`
    ) VALUES (
        :servicePhone, now(), :serviceAddress, 
        '2024-03-10', '1', '1', 
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

// try {
    $statement->execute();
    echo $pdo->lastInsertId();
// } catch (PDOException $e) {
//     error_log("數據庫錯誤: " . $e->getMessage());
//     echo "錯誤：數據庫錯誤";
// }
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

