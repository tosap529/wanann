<?php

include("connect_test.php");
// include("connect.php");




$pdo = getPDO();
// echo $reqBody['id'];
// $statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement ->bindValue(":id",  $reqBody['id']);

$statement ->execute();

$memberAllData['userData'] = $statement->fetch();


// $pdo = getPDO();
// $statement = $pdo->prepare("select * from SERVICE_ORDER where MEMBER_ID= 1");
$statement = $pdo->prepare("select * from SERVICE_ORDER o 
join SERVICE_RESERVE_TIME srt on o.SERVICE_RESERVE_TIME_ID = srt.ID
join RESERVE_TIME rt on srt.RESERVE_TIME_ID = rt.ID
where o.MEMBER_ID=:id");
$statement ->bindValue(":id",  $reqBody['id']);
$statement ->execute();
$memberAllData['sOrder'] = $statement->fetchAll();

// $statement = $pdo->prepare("select * from PRODUCT_ORDER where MEMBER_ID= 1");
$statement = $pdo->prepare("select po.ID,po.ORDER_DATE,po.PAYMENT,po.ORDER_STATUS,po.MEMBER_ID,pod.QUANTITY,pod.PRODUCT_ID,p.PRODUCT_NAME,p.PRODUCT_PIC1,p.PRODUCT_PRICE from PRODUCT_ORDER po
join PRODUCT_ORDER_DETAIL pod on po.ID = pod.PRODUCT_ORDER_ID
join PRODUCT p on pod.PRODUCT_ID = p.ID
where MEMBER_ID=:id");
$statement ->bindValue(":id",  $reqBody['id']);
$statement ->execute();
$memberAllData['mOrder'] = $statement->fetchAll();
// print_r($memberAllData['mOrder']);
$memberPerData=[];
// for($i=0; $i<count($memberAllData['mOrder']); $i++ ){
//     echo($memberAllData['mOrder'][$i]['ID']);
//     for($j=1; $j<=max($memberAllData['mOrder'][$i]['ID']);$j++){
//         array_push($memberPerData[$j]['quantity'],$memberAllData['mOrder'][$i]['QUANTITY']);
//         array_push($memberPerData[$j]['product'],$memberAllData['mOrder'][$i]['PRODUCT_ID']);
        
//     }
    
// }
// for($i = 0; $i < count($arr); $i++){
// 	echo $arr[$i];
// 	echo "<br/>";
// }
// echo(max($memberAllData['mOrder']['ID']));





// echo "接收成功";
echo json_encode($memberAllData);



?>