<?php
// 本機測試
include("connect_test.php");

// 上伺服器
// include("connect.php");

$pdo = getPDO();

$productId = isset($_GET['productId']) ? $_GET['productId'] : 1;

$statement = $pdo->prepare("SELECT * FROM PRODUCT WHERE ID = :productId");
$statement->bindParam(':productId', $productId);

$statement->execute();
$products = $statement->fetchAll();

echo json_encode($products);

?>

