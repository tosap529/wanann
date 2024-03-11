<?php

include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from CONTACT_TABLE order by CREATE_TIME desc");
$statement ->execute();
$contact = $statement->fetchAll();

echo json_encode($contact);

?>