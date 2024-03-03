<?php

//拿到前端body
//file_get_contents("php://input")
//解碼

// header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:POST'); 
header('Access-Control-Allow-Headers:Content-Type'); 
// header('Content-Type:application/json'); 


$reqBody = json_decode(file_get_contents("php://input"), true);

// var_dump($reqBody);

// if (!$reqBody) {
//     echo "未從前端接收到任何數據";
//     exit;
// }


function getPDO(){

    //MySQL相關資訊
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "Wanann_database";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);

    return $pdo;

}




$pdo = getPDO();
$statement = $pdo->prepare("insert into MEMBER(NAME,PHONE,EMAIL,SEND_ADDRESS,SERVICE_ADDRESS, CREATE_TIME,USERNAME, PASSWORD,  STATUS,MEMBER_PIC) values(:name, :phone, :email, :send_address, :service_address,  NOW(),:username, :password, b'0',:member_pic)");
$statement ->bindValue(":name", $reqBody["name"]);
$statement ->bindValue(":phone", $reqBody["phone"]);
$statement ->bindValue(":email", $reqBody["email"]);
$statement ->bindValue(":send_address", $reqBody["send_address"]);
$statement ->bindValue(":service_address", $reqBody["service_address"]);
$statement ->bindValue(":username", $reqBody["username"]);
$statement ->bindValue(":password", $reqBody["password"]);
$statement ->bindValue(":member_pic", $reqBody["member_pic"]);

$statement ->execute();

// print_r($statement);

echo "註冊成功";


?>