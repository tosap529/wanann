<?php
include("connect_test.php");
// include("connect.php");
// print_r($reqBody) ;
// echo $reqBody['id'];
$pdo = getPDO();
$statement = $pdo->prepare("
    select ID,EMAIL
    from MEMBER 
    where EMAIL=:email");
$statement ->bindValue(":email",  $reqBody['email']);
$statement ->execute();
$data = $statement->fetchAll();
// print_r($data);
if(count($data)>1){
    echo 'email重複';

}else if(count($data)==1){
    if($data[0]['ID']==$reqBody['id']){
        // echo $data[0]['ID'];
        echo '和原本的一樣';
        // $pdo = getPDO();
        // $statement = $pdo->prepare("
        //     update MEMBER
        //     set 
        //         EMAIL = :email
        //     where ID=:id");
        // $statement ->bindValue(":id",  $reqBody['id']);
        // $statement ->bindValue(":email",  $reqBody['email']);
        // $statement ->execute();  
    }
    else{
        echo 'email重複';
    }
}
else{
   echo count($data);
    echo '可改email';
    $pdo = getPDO();
    // 上線用
    // $statement = $pdo->prepare("update MEMBER set MEMBER_PIC = '".$fileNewName."' where ID=1");
    // 測試用
    $statement = $pdo->prepare("
        update MEMBER
        set 
            NAME = :name,
            PHONE = :phone,
            EMAIL = :email,
            COUNTY = :county,
            DISTRICT = :district,
            SEND_ADDRESS = :send_address,
            SERVICE_ADDRESS = :service_address,
            PASSWORD = :password
        where ID=:id");
    // $statement = $pdo->prepare("update MEMBER set MEMBER_PIC = '".$fileTestPath."' where ID=9");
    
    $statement ->bindValue(":id",  $reqBody['id']);
    $statement ->bindValue(":name",  $reqBody['name']);
    $statement ->bindValue(":phone",  $reqBody['phone']);
    $statement ->bindValue(":email",  $reqBody['email']);
    $statement ->bindValue(":county",  $reqBody['county']);
    $statement ->bindValue(":district",  $reqBody['district']);
    $statement ->bindValue(":send_address",  $reqBody['send_address']);
    $statement ->bindValue(":service_address",  $reqBody['service_address']);
    $statement ->bindValue(":password",  $reqBody['password']);
    $statement ->execute();
}




?>