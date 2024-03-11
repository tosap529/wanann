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
    // $db_host = "127.0.0.1";
    // $db_user = "tibamefe_since2021";
    // $db_pass = "vwRBSb.j&K#E";
    // $db_select = "tibamefe_thd104g1";
    //測試用
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_pass = "password";
    $db_select = "wanann_database";

    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);

    return $pdo;

}

?>