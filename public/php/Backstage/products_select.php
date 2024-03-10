<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select * from PRODUCT p join PRODUCT_CATEGORY c on p.PRODUCT_CATEGORY_ID = c.ID order by CREATE_TIME desc");
$statement ->execute();
$product = $statement->fetchAll();

echo json_encode($product);

?>