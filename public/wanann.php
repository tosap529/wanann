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
    // $db_host = "127.0.0.1";
    // $db_user = "tibamefe_since2021";
    // $db_pass = "vwRBSb.j&K#E";
    // $db_select = "tibamefe_thd104g1";

    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);

    return $pdo;

}




$pdo = getPDO();
$statement = $pdo->prepare("insert into CONTACT_TABLE(NAME, PHONE, EMAIL, CONTENT, CREATE_TIME, STATUS) values(:name, :phone, :email, :message, NOW(), b'0')");
$statement ->bindValue(":name", $reqBody["name"]);
$statement ->bindValue(":phone", $reqBody["phone"]);
$statement ->bindValue(":email", $reqBody["email"]);
$statement ->bindValue(":message", $reqBody["message"]);
$statement ->execute();

// print_r($statement);

echo "註冊成功";

?>