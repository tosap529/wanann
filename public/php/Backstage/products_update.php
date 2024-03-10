
<?php

include("../connect_test.php");


$pdo = getPDO();
$statement = $pdo->prepare("update PRODUCT  set STATUS = :status, PRODUCT_NAME = :productName, SLOGAN1 = :slogan1, SLOGAN2 = :slogan2, PRODUCT_PIC1 = :productPic1, PRODUCT_PIC2 = :productPic2, PRODUCT_PIC3 = :productPic3, PRODUCT_PRICE = :productPrice, PRODUCT_STYLE = :productStyle, PRODUCT_CONTENT = :productContent, PRODUCT_SUBCONTENT1 = :productSubcontent1, PRODUCT_SUBCONTENT2 = :productSubcontent2, CREATE_TIME = :createTime, PRODUCT_CATEGORY_ID = :productCategoryId where ID = :id");

$statement->bindValue(":status", $reqBody["status"]);
$statement->bindValue(":id", $reqBody["id"]);
$statement->bindValue(":productName", $reqBody["productName"]);
$statement->bindValue(":slogan1", $reqBody["slogan1"]);
$statement->bindValue(":slogan2", $reqBody["slogan2"]);
$statement->bindValue(":productPic1", $reqBody["productPic1"]);
$statement->bindValue(":productPic2", $reqBody["productPic2"]);
$statement->bindValue(":productPic3", $reqBody["productPic3"]);
$statement->bindValue(":productPrice", $reqBody["productPrice"]);
$statement->bindValue(":productStyle", $reqBody["productStyle"]);
$statement->bindValue(":productContent", $reqBody["productContent"]);
$statement->bindValue(":productSubcontent1", $reqBody["productSubcontent1"]);
$statement->bindValue(":productSubcontent2", $reqBody["productSubcontent2"]);
$statement->bindValue(":createTime", $reqBody["createTime"]);
$statement->bindValue(":productCategoryId", $reqBody["productCategoryId"]);



$statement->execute();

json_encode($statement);

?>