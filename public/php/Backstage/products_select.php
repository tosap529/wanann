<?php

// include("../connect_test.php");
include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select p.ID, c.CATEGORY_NAME, p.SLOGAN1, p.SLOGAN2, p.PRODUCT_NAME, p.PRODUCT_PIC1, p.PRODUCT_PIC2, p.PRODUCT_PIC3, p.PRODUCT_STYLE, p.PRODUCT_PRICE, p.PRODUCT_CONTENT, p.PRODUCT_SUBCONTENT1, p.PRODUCT_SUBCONTENT2 ,p.STATUS, p.CREATE_TIME, p.PRODUCT_CATEGORY_ID from PRODUCT p join PRODUCT_CATEGORY c on p.PRODUCT_CATEGORY_ID = c.ID order by CREATE_TIME desc");
$statement ->execute();
$product = $statement->fetchAll();

echo json_encode($product);

?>