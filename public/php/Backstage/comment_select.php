<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from SERVICE_COMMENT order by COMMENT_DATE desc");
$statement ->execute();
$comment = $statement->fetchAll();

echo json_encode($comment);

?>