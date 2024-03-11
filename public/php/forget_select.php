<?php
include("connect.php");

$sql = "SELECT ID FROM member where EMAIL= :email";
$pdo = getPDO();    
$statement = $pdo->prepare($sql);
$statement->bindValue(":email",  $reqBody["email"]);

$statement->execute();

$data = $statement->fetch();

// echo $data;
if($data!=null){
    echo $data['ID'];

}else{
    echo 'failed';
}

?>