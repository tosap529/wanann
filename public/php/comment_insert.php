<?php
// include("connect_test.php");
include("connect.php");

print_r($reqBody);

$pdo = getPDO();
$statement = $pdo->prepare("
    insert into
    SERVICE_COMMENT (COMMENT_DATE,SERVICE_ATTITUDE,SERVICE_QUALITY,CONTENT,STATUS)
    values
    (NOW(),:service_attitude,:service_quality,:content,1)
    ");
$statement ->bindValue(":service_attitude",  $reqBody['attitude']);
$statement ->bindValue(":service_quality",  $reqBody['quality']);
$statement ->bindValue(":content",  $reqBody['content']);
$statement ->execute();
// $data = $statement->fetchAll();

$pdo = getPDO();
$statement = $pdo->prepare("
    SELECT ID 
    FROM SERVICE_COMMENT
    order by COMMENT_DATE desc
    limit 1
");
$statement ->execute();
$commentID = $statement->fetch();
echo $commentID['ID']; //評論ID


$pdo = getPDO();
$statement = $pdo->prepare("
    update SERVICE_ORDER
    set
        RANK_STATUS = 0,
        SERVICE_COMMENT_ID = :comment_ID
    where (ID = :order_ID and MEMBER_ID = :member_ID)
    ");
    $statement ->bindValue(":comment_ID",  $commentID['ID']);
    $statement ->bindValue(":order_ID",  $reqBody['order_id']);
    $statement ->bindValue(":member_ID",  $reqBody['member_id']);
    $statement ->execute();
?>