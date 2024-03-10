<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select sc.*, so.ID as ORDER_ID from SERVICE_COMMENT sc join SERVICE_ORDER so on sc.ID = so.SERVICE_COMMENT_ID order by COMMENT_DATE desc");
$statement ->execute();
$comment = $statement->fetchAll();

echo json_encode($comment);

?>