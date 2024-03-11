<?php
include("connect.php");

// echo 'hi';
// $username = $_POST['username'];
// $password = $_POST['password'];

$sql = "SELECT * FROM MEMBER where (USERNAME = :username and PASSWORD = :password )";
$pdo = getPDO();

$statement = $pdo->prepare($sql);
// print_r($reqBody);
$statement->bindValue(":username",  $reqBody["username"]);
$statement->bindValue(":password",  $reqBody["password"]);
$statement->execute();

$data = $statement->fetchAll();
if($data != null){
    $member_ID =  $data[0]['ID'];
    $member_pic =  $data[0]['MEMBER_PIC'];
    $member_status = $data[0]['STATUS'];

    if($member_status==1){
        echo $member_ID;
        echo ',';
        echo $member_pic;  
    }else{
        echo '此帳號已被停權';
    }
    
    // print_r($data[0]['ID']);
    // echo var_dump(is_writeable(ini_get("D:\xampp\tmp")));
}else{
    echo '登入失敗';

}

?>