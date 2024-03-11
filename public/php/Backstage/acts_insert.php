<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("../connect.php");


$act_info = json_decode($_POST['act_info'],true);


if(!$act_info["title"]||!$act_info["content"]||!$act_info["category"]||!$act_info["couponPrice"]||!$act_info["couponId"]){
    echo '資料不全';
 
}else{

    $pdo = getPDO();
    if($act_info["deadline"] != ''){
        $statement = $pdo->prepare("
        insert into
        ACTIVITY (TITLE,PIC,CONTENT,CREATE_TIME,DEADLINE,CATEGORY,COUPON_PRICE,COUPON_ID,STATUS) 
        values
        (:title, :pic, :content, NOW(), :deadline, :category, :coupon_price,:coupon_ID, 1)
        ");
        $statement ->bindValue(":title", $act_info["title"]);
        $statement ->bindValue(":pic", $act_info["pic"]);
        $statement ->bindValue(":content", $act_info["content"]);
        $statement ->bindValue(":deadline", $act_info["deadline"]);
        $statement ->bindValue(":category", $act_info["category"]);
        $statement ->bindValue(":coupon_price", $act_info["couponPrice"]);
        $statement ->bindValue(":coupon_ID", $act_info["couponId"]);
        // $statement ->bindValue(":status", $act_info["status"]);
    }else{
        $statement = $pdo->prepare("
        insert into
        ACTIVITY (TITLE,PIC,CONTENT,CREATE_TIME,DEADLINE,CATEGORY,COUPON_PRICE,COUPON_ID,STATUS) 
        values
        (:title, :pic, :content, NOW(), CURDATE(), :category, :coupon_price,:coupon_ID, 1)
        ");
        $statement ->bindValue(":title", $act_info["title"]);
        $statement ->bindValue(":pic", $act_info["pic"]);
        $statement ->bindValue(":content", $act_info["content"]);
        $statement ->bindValue(":category", $act_info["category"]);
        $statement ->bindValue(":coupon_price", $act_info["couponPrice"]);
        $statement ->bindValue(":coupon_ID", $act_info["couponId"]);
        // $statement ->bindValue(":status", $act_info["status"]);
    }

    $statement ->execute();

    $pdo = getPDO();
    $statement = $pdo->prepare("
        select ID 
        from ACTIVITY
        order by ID desc
        limit 1");
    $statement ->execute();
    $actID = $statement->fetch();
    $self = 'act_new_'.$actID['ID']; //組成自定義圖片名稱，後面是文章ID
    echo $actID['ID'];

    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }
//0312測試：加上錯誤代碼判斷
    if($_FILES["act_pic"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["profile_pic"]["error"];
    }else{
    //取得上傳的檔案資訊=======================================
    $fileName = $_FILES["act_pic"]["name"];    //檔案名稱含副檔名        
    $filePath_Temp = $_FILES["act_pic"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
    $fileType = $_FILES["act_pic"]["type"];    //檔案種類        
    $fileSize = $_FILES["act_pic"]["size"];    //檔案尺寸
    //=======================================================

    $actPicPath = "/thd104/g1/img/act/act_new/";
    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

    //檔案最終存放位置
    $filePath = $ServerRoot."/thd104/g1/public/img/act/act_new/".$fileName;
    // 上線用－自訂名稱
    $fileNewPath = $ServerRoot.$actPicPath.$self.'.'.getExtensionName($filePath);
    $fileNewName = $actPicPath.$self.'.'.getExtensionName($filePath);
    // 測試用－自訂名稱
    // $fileTestPath =$ServerRoot."/thd104/g1/public/img/act/act_new/".$self.'.'.getExtensionName($filePath);
    // $fileTestName =$actPicPath.$self.'.'.getExtensionName($filePath);

    //將暫存檔搬移到正確位置
    move_uploaded_file($filePath_Temp, $fileNewPath);
    }


    // 將圖片路徑存進資料庫
    $pdo = getPDO();
    // 上線用
    // $statement = $pdo->prepare("update ACTIVITY set PIC = '".$fileNewName."' where ID=:id");
    // 測試用
    $statement = $pdo->prepare("update ACTIVITY set PIC = '". $fileNewName."' where ID=:id");
    $statement ->bindValue(":id", $actID['ID']);
    $statement ->execute();




}






?>