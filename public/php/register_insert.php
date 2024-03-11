<?php
include("connect.php");
echo 'hi';
$pdo = getPDO();
$statement = $pdo->prepare("
    select EMAIL
    from MEMBER 
    where EMAIL=:email");
$statement ->bindValue(":email",  $reqBody['email']);
$statement ->execute();
$data = $statement->fetchAll();


    $pdo = getPDO();
    $statement = $pdo->prepare("insert into 
    MEMBER (NAME,PHONE,EMAIL,COUNTY,DISTRICT,SEND_ADDRESS,SERVICE_ADDRESS, CREATE_TIME,USERNAME, PASSWORD, MEMBER_PIC,STATUS) values(:name, :phone, :email, :county, :district, :send_address, :service_address,  NOW(),:username, :password,:member_pic,:status)");







if(count($data)>0){
    echo 'email重複';
}else{
    // echo 'email通過';
    $pdo = getPDO();
    $statement = $pdo->prepare("insert into MEMBER(NAME,PHONE,EMAIL,COUNTY,DISTRICT,SEND_ADDRESS,SERVICE_ADDRESS, CREATE_TIME,USERNAME, PASSWORD, MEMBER_PIC,STATUS) values(:name, :phone, :email, :county, :district, :send_address, :service_address,  NOW(),:username, :password,:member_pic,:status)");
    $statement ->bindValue(":name", $reqBody["name"]);
    $statement ->bindValue(":phone", $reqBody["phone"]);
    $statement ->bindValue(":email", $reqBody["email"]);
    $statement ->bindValue(":county", $reqBody["county"]);
    $statement ->bindValue(":district", $reqBody["district"]);
    $statement ->bindValue(":send_address", $reqBody["send_address"]);
    $statement ->bindValue(":service_address", $reqBody["service_address"]);
    $statement ->bindValue(":username", $reqBody["username"]);
    $statement ->bindValue(":password", $reqBody["password"]);
    $statement ->bindValue(":member_pic", $reqBody["member_pic"]);
    $statement ->bindValue(":member_pic", $reqBody["status"]);

    $statement ->execute();

    // print_r($statement);

    echo "註冊成功";
}










?>