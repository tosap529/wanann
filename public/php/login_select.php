<?php
include('connect_test.php');
// include('connect.php')

// $username = $_POST['usernameLogin'];
// $password = $_POST['pwdLogin'];

$sql = "SELECT * FROM member where (USERNAME= :username and PASSWORD= :password )";
$pdo = getPDO();

$statement = $pdo->prepare($sql);
$statement->bindValue(":username",  $reqBody["username"]);
$statement->bindValue(":password",  $reqBody["password"]);
$statement->execute();

$data = $statement->fetchAll();
if($data != null){
    $member_ID =  $data[0]['ID'];
    $member_pic =  $data[0]['MEMBER_PIC'];
    // session_start();
    // $_SESSION["isLogin"] = $reqBody["username"];
    // $_SESSION["isLogin"] = $member_ID;
    // echo '登入成功';
    echo $member_ID;
    echo ',';
    echo $member_pic;
    // print_r($data[0]['ID']);
    // echo var_dump(is_writeable(ini_get("D:\xampp\tmp")));
}else{
    echo '登入失敗';

}

?>