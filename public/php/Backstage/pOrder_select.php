<?php

// include("../connect_test.php");
include("../connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select po.ID, po.ADDRESSEE_ADDRESS, m.PHONE, m.USERNAME, m.NAME, po.ORDER_DATE, po.PAYMENT, po.ORDER_STATUS, pod.QUANTITY, p.PRODUCT_NAME, p.PRODUCT_STYLE, p.PRODUCT_PRICE from PRODUCT_ORDER po join MEMBER m on po.MEMBER_ID = m.ID  join PRODUCT_ORDER_DETAIL pod on pod.PRODUCT_ORDER_ID = po.ID join PRODUCT p on p.ID = pod.PRODUCT_ID join PRODUCT_CATEGORY pc on pc.ID = p.PRODUCT_CATEGORY_ID;");
$statement ->execute();
$pOrder = $statement->fetchAll();


$orders = [];

//固定的欄位
foreach($pOrder as $row) {
    $id = $row['ID'];
    $username = $row['USERNAME'];
    $order_date = $row['ORDER_DATE'];
    $payment = $row['PAYMENT'];
    $order_status = $row['ORDER_STATUS'];
    $name = $row['NAME'];
    $phone = $row['PHONE'];
    $addresseeAddress = $row['ADDRESSEE_ADDRESS'];
    
    //檢查是否具有相同訂單的資料, 重新包裝你的訂單
    if(!isset($orders[$id])){
        $orders[$id] = [
            'id' => $id,
            'username' => $username,
            'order_date' => $order_date,
            'payment' => $payment,
            'order_status' => $order_status,
            'name' => $name,
            'phone' => $phone,
            'addresseeAddress' => $addresseeAddress,
            'products' => []
        ];
    }
    //每一列資料中的商品名稱和數量加入對應的products陣列中
    $orders[$id]['products'][] = [
    'productName' => $row['PRODUCT_NAME'],
    'quantity' => $row['QUANTITY'],
    'productStyle' => $row['PRODUCT_STYLE'],
    'productPrice' => $row['PRODUCT_PRICE']

];
}

echo json_encode(array_values($orders));


// echo json_encode($contact);

?>