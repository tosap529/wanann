<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select s.SERVICE_NAME, so.SERVICE_ADDRESS, m.PHONE, m.NAME, ads.ADD_SERVICE_NAME , so.ID, m.USERNAME, so.ORDER_DATE, so.SERVICE_DATE, rt.TIME_RANGE_NAME, so.PAYMENT, so.ORDER_STATUS, so.RANK_STATUS from SERVICE_ORDER so join SERVICE_COMMENT sc on so.SERVICE_COMMENT_ID = sc.ID join SERVICE_RESERVE_TIME srt on so.SERVICE_RESERVE_TIME_ID = srt.ID join SERVICE s on srt.SERVICE_ID = s.ID join RESERVE_TIME rt on rt.ID = srt.RESERVE_TIME_ID join SERVICE_ORDER_ADD_SERVICE soas on soas.SERVICE_ORDER_ID = so.ID join ADD_SERVICE ads on ads.ID = soas.ADD_SERVICE_ID join MEMBER m on m.id = so.MEMBER_ID");
$statement ->execute();
$sOrder = $statement->fetchAll();


$orders = [];

//固定的欄位
foreach($sOrder as $row) {
    $id = $row['ID'];
    $name = $row['NAME'];
    $phone = $row['PHONE'];
    $service_address = $row['SERVICE_ADDRESS'];
    $username = $row['USERNAME'];
    $order_date = $row['ORDER_DATE'];
    $service_date = $row['SERVICE_DATE'];
    $time_range_name = $row['TIME_RANGE_NAME'];
    $payment = $row['PAYMENT'];
    $order_status = $row['ORDER_STATUS'];
    $rank_status = $row['RANK_STATUS'];
    $service_name = $row['SERVICE_NAME'];

    
    //檢查是否具有相同訂單的資料, 重新包裝你的訂單
    if(!isset($orders[$id])){
        $orders[$id] = [
            'id' => $id,
            'name' => $name,
            'phone' => $phone,
            'service_address' => $service_address,
            'username' => $username,
            'order_date' => $order_date,
            'service_date' => $service_date,
            'time_range_name' => $time_range_name,
            'payment' => $payment,
            'order_status' => $order_status,
            'rank_status' => $rank_status,
            'service_name' => $service_name,
            'add_service' => []
        ];
    }
    //每一列資料中的商品名稱和數量加入對應的products陣列中
    $orders[$id]['add_service'][] = [
    'addServiceName' => $row['ADD_SERVICE_NAME'],

];
}

echo json_encode(array_values($orders));


// echo json_encode($contact);

?>