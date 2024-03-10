<?php

// include("connect_test.php");
include("connect.php");




$pdo = getPDO();
// echo $reqBody['id'];
// $statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement = $pdo->prepare("select * from MEMBER where ID= :id");
$statement ->bindValue(":id",  $reqBody['id']);

$statement ->execute();

$memberAllData['userData'] = $statement->fetch();


// 服務訂單
// $statement = $pdo->prepare("select * from SERVICE_ORDER where MEMBER_ID= 1");
$statement = $pdo->prepare("select  
o.ID,o.ORDER_DATE, o.SERVICE_ADDRESS,o.SERVICE_PHONE, o.SERVICE_DATE, o.PAYMENT, o.ORDER_STATUS, o.RANK_STATUS, m.NAME, rt.TIME_RANGE_NAME, 
s.SERVICE_NAME,s.SERVICE_PIC, s.SERVICE_PRICE, ass.ADD_SERVICE_NAME, ass.ADD_SERVICE_PRICE, ass.ADD_SERVICE_PIC
from SERVICE_ORDER o 
join SERVICE_RESERVE_TIME srt on o.SERVICE_RESERVE_TIME_ID = srt.ID
join SERVICE s on s.ID = srt.SERVICE_ID
join RESERVE_TIME rt on srt.RESERVE_TIME_ID = rt.ID
join SERVICE_ORDER_ADD_SERVICE soas on soas.SERVICE_ORDER_ID = o.ID
join ADD_SERVICE ass on ass.ID = soas.ADD_SERVICE_ID
join MEMBER m on m.ID = o.MEMBER_ID
where o.MEMBER_ID=:id");
$statement ->bindValue(":id",  $reqBody['id']);
$statement ->execute();
$memberAllData['sOrder'] = $statement->fetchAll();

$sOrders = [];
foreach($memberAllData['sOrder'] as $row){
    $sOrder_ID = $row['ID'];
    $sOrder_date = $row['ORDER_DATE'];
    $sOrder_name = $row['NAME'];
    $sOrder_address = $row['SERVICE_ADDRESS'];
    $sOrder_phone = $row['SERVICE_PHONE'];
    $sOrder_Ostatus = $row['ORDER_STATUS'];
    $sOrder_Rstatus = $row['RANK_STATUS'];
    $sOrder_payment = $row['PAYMENT'];
    $sOrder_serviceDate = $row['SERVICE_DATE'];
    $sOrder_timeRange = $row['TIME_RANGE_NAME'];
    $sOrder_service = $row['SERVICE_NAME'];
    $sOrder_servicePic = $row['SERVICE_PIC'];
    $sOrder_serviceP = $row['SERVICE_PRICE'];

    if(!isset($sOrders[$sOrder_ID])){
        $sOrders[$sOrder_ID] = [
            'id' => $sOrder_ID,
            'order_date' => $sOrder_date,
            'order_name'=>$sOrder_name,
            'order_address'=>$sOrder_address,
            'order_phone'=>$sOrder_phone,
            'order_status' => $sOrder_Ostatus,
            'rank_status' => $sOrder_Rstatus,
            'payment' => $sOrder_payment,
            'service_date' => $sOrder_serviceDate,
            'time_range' => $sOrder_timeRange,
            'service' => $sOrder_service,
            'service_pic' => $sOrder_servicePic,
            'service_price' => $sOrder_serviceP,
            'add_service' => [],
            'total'=>$sOrder_serviceP
        ];
    }
    
    $sOrders[$sOrder_ID]['add_service'][] = [
        'add_service_pic' => $row['ADD_SERVICE_PIC'],
        'add_service_name' => $row['ADD_SERVICE_NAME'],
        'add_service_price' => $row['ADD_SERVICE_PRICE'],
        // 'price' =>$row['PRODUCT_PRICE']*$row['QUANTITY']
    ];
   
    $sOrders[$sOrder_ID]['total'] +=  $row['ADD_SERVICE_PRICE'];

}

$memberAllData['sOrder'] = $sOrders;


// 商品訂單
// $statement = $pdo->prepare("select * from PRODUCT_ORDER where MEMBER_ID= 1");
$statement = $pdo->prepare("select po.ID,po.ADDRESSEE_NAME,po.ADDRESSEE_ADDRESS,po.ADDRESSEE_PHONE,po.ORDER_DATE,po.PAYMENT,po.ORDER_STATUS,po.MEMBER_ID,pod.QUANTITY,pod.PRODUCT_ID,p.PRODUCT_NAME,p.PRODUCT_PIC1,p.PRODUCT_PRICE from PRODUCT_ORDER po
join PRODUCT_ORDER_DETAIL pod on po.ID = pod.PRODUCT_ORDER_ID
join PRODUCT p on pod.PRODUCT_ID = p.ID
where MEMBER_ID=:id");
$statement ->bindValue(":id",  $reqBody['id']);
$statement ->execute();
$memberAllData['mOrder'] = $statement->fetchAll();

$mOrders = [];

foreach($memberAllData['mOrder'] as $row){
    $mOrder_ID = $row['ID'];
    $mOrder_date = $row['ORDER_DATE'];
    $mOrder_name = $row['ADDRESSEE_NAME'];
    $mOrder_address = $row['ADDRESSEE_ADDRESS'];
    $mOrder_phone = $row['ADDRESSEE_PHONE'];
    $mOrder_status = $row['ORDER_STATUS'];
    $mOrder_payment = $row['PAYMENT'];

    if(!isset($mOrders[$mOrder_ID])){
        $mOrders[$mOrder_ID] = [
            'id' => $mOrder_ID,
            'order_date' => $mOrder_date,
            'order_name'=>$mOrder_name,
            'order_address'=>$mOrder_address,
            'order_phone'=>$mOrder_phone,
            'order_status' => $mOrder_status,
            'payment' => $mOrder_payment,
            'products' => [],
            'total'=>0
        ];
    }
    
    $mOrders[$mOrder_ID]['products'][] = [
        'product_pic' => $row['PRODUCT_PIC1'],
        'product_name' => $row['PRODUCT_NAME'],
        'quantity' => $row['QUANTITY'],
        'price' =>$row['PRODUCT_PRICE']*$row['QUANTITY']
    ];
   
    $mOrders[$mOrder_ID]['total'] +=  $row['PRODUCT_PRICE']*$row['QUANTITY'];

}

$memberAllData['mOrder'] = $mOrders;





// echo "接收成功";
echo json_encode($memberAllData);



?>