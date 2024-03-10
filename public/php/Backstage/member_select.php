<?php

// include("../connect_test.php");
include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from MEMBER order by CREATE_TIME desc");
$statement ->execute();
$member = $statement->fetchAll();

echo json_encode($member);

?>