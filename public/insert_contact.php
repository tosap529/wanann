<?php

//MySQL相關資訊
$db_host = "127.0.0.1";
$db_user = "root";
$db_pass = "password";
$db_select = "wanann_database";

//建立資料庫連線物件
$dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

//建立PDO物件，並放入指定的相關資料
$pdo = new PDO($dsn, $db_user, $db_pass);

return $pdo;

$pdo = getPDO();

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$content = $_POST['message'];

$sql = "INSERT INTO CONTACT_TABLE (NAME, PHONE, EMAIL, CONTENT, CREATE_TIME, STATUS) 
        VALUES (:name, :phone, :email, :content, NOW(), 1)";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':name', $name);
$stmt->bindParam(':phone', $phone);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':content', $content);

if ($stmt->execute()) {
    echo "新增成功!";
} else {
    echo "新增失敗!";
}
?>
