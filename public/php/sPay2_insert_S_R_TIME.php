<?php
// 本機測試
// include("connect.php");

// $pdo = getPDO();


// $content = trim(file_get_contents("php://input"));
// $reqBody = json_decode($content, true);


// $statement = $pdo->prepare("
//     INSERT INTO `SERVICE_RESERVE_TIME` (`SERVICE_ID`, `RESERVE_TIME_ID`)
//     VALUES (:serviceId, :reserveTimeId);
// ");

// $statement->bindValue(":serviceId", $reqBody["SERVICE_ID"]);
// $statement->bindValue(":reserveTimeId", $reqBody["RESERVE_TIME_ID"]);


// $statement->execute();

// echo "訂單提交成功";

// 傳回本次資料新家資料的ID給前端
// $lastInsertId = $pdo->lastInsertId();

// echo $lastInsertId;

// $pdo = getPDO();
//     $statement = $pdo->prepare("
//         select ID 
//         from SERVICE_RESERVE_TIME
//         order by ID desc
//         limit 1");
//     $statement ->execute();
//     $actID = $statement->fetch();
    
//     echo $actID['ID'];

?>


<?php
// 引入数据库连接文件
include("connect.php");

// 获取数据库连接对象
$pdo = getPDO();

// 检查是否接收到了 JSON 数据
$content = trim(file_get_contents("php://input"));
$reqBody = json_decode($content, true);

// 检查 JSON 数据是否成功解析
if ($reqBody === null) {
    echo "无法解析 JSON 数据";
    exit();
}

// 准备 SQL 语句，插入数据到 SERVICE_RESERVE_TIME 表
$statement = $pdo->prepare("
    INSERT INTO `SERVICE_RESERVE_TIME` (`SERVICE_ID`, `RESERVE_TIME_ID`)
    VALUES (:serviceId, :reserveTimeId);
");

// 绑定参数并执行 SQL 语句
$statement->bindValue(":serviceId", $reqBody["SERVICE_ID"]);
$statement->bindValue(":reserveTimeId", $reqBody["RESERVE_TIME_ID"]);

// 执行 SQL 语句
if ($statement->execute()) {
    // SQL 语句执行成功
    echo "訂單提交成功";
} else {
    // SQL 语句执行失败，输出错误信息
    $errorInfo = $statement->errorInfo();
    echo "SQL 错误：" . $errorInfo[2];
}
?>






