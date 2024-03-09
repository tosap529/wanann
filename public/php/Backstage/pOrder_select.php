<?php

include("../connect_test.php");

$pdo = getPDO();
$statement = $pdo->prepare("select po.ID, m.USERNAME, po.ORDER_DATE, po.PAYMENT, po.ORDER_STATUS, pod.QUANTITY, p.PRODUCT_NAME from PRODUCT_ORDER po join MEMBER m on po.MEMBER_ID = m.ID  join PRODUCT_ORDER_DETAIL pod on pod.PRODUCT_ORDER_ID = po.ID join PRODUCT p on p.ID = pod.PRODUCT_ID join PRODUCT_CATEGORY pc on pc.ID = p.PRODUCT_CATEGORY_ID;");
$statement ->execute();
$contact = $statement->fetchAll();


$orders = [];

//固定的欄位
foreach($contact as $row) {
    $id = $row['ID'];
    $username = $row['USERNAME'];
    $order_date = $row['ORDER_DATE'];
    $payment = $row['PAYMENT'];
    $order_status = $row['ORDER_STATUS'];
    
    //檢查是否具有相同訂單的資料, 重新包裝你的訂單
    if(!isset($orders[$id])){
        $orders[$id] = [
            'id' => $id,
            'username' => $username,
            'order_date' => $order_date,
            'payment' => $payment,
            'order_status' => $order_status,
            'products' => []
        ];
    }
    //每一列資料中的商品名稱和數量加入對應的products陣列中
    $orders[$id]['products'][] = [
    'product_name' => $row['PRODUCT_NAME'],
    'quantity' => $row['QUANTITY']

];
}

echo json_encode(array_values($orders));


// echo json_encode($contact);

?>