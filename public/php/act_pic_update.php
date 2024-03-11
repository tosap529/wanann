<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
// echo $_FILES["profile_pic"]["name"];
// preg_match('/([0-9])/', json_encode($_POST['member_ID']),$member_ID);
$act_ID = preg_replace('/\D/', '', $_POST['id']);
echo $act_ID;
$self = 'act_'.$act_ID;

//判斷是否上傳成功
if($_FILES["profile_pic"]["error"] > 0){
    echo "上傳失敗: 錯誤代碼".$_FILES["profile_pic"]["error"];
}else{
    //取得上傳的檔案資訊=======================================
    $fileName = $_FILES["profile_pic"]["name"];    //檔案名稱含副檔名        
    $filePath_Temp = $_FILES["profile_pic"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
    $fileType = $_FILES["profile_pic"]["type"];    //檔案種類        
    $fileSize = $_FILES["profile_pic"]["size"];    //檔案尺寸
    //=======================================================

    $actPicPath = "/thd104/g1/img/act/";

    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    // echo $ServerRoot;
    //檔案最終存放位置
    $filePath = $ServerRoot."/thd104/g1/public/img/act/".$fileName;
    // 上線用－自訂名稱
    $fileNewPath = $ServerRoot.$actPicPath.$self.'.'.getExtensionName($filePath);
    $fileNewName = $actPicPath.$self.'.'.getExtensionName($filePath);
    // 測試用－自訂名稱
    $fileTestPath =$ServerRoot."/thd104/g1/public/img/act/".$self.'.'.getExtensionName($filePath);
    $fileTestName =$actPicPath.$self.'.'.getExtensionName($filePath);

    //將暫存檔搬移到正確位置
    move_uploaded_file($filePath_Temp, $fileTestPath);
    // move_uploaded_file($filePath_Temp, $fileNewPath);

}

//取得檔案副檔名
function getExtensionName($filePath){
    $path_parts = pathinfo($filePath);
    return $path_parts["extension"];
}

// 將圖片路徑存進資料庫
include("connect_test.php");
// include("connect.php");

$pdo = getPDO();
// 上線用
// $statement = $pdo->prepare("update MEMBER set MEMBER_PIC = '".$fileNewName."' where ID=:id");
// 測試用
$statement = $pdo->prepare("update ACTIVITY set PIC = '". $fileTestName."' where ID=:id");

$statement ->bindValue(":id", $act_ID);

$statement ->execute();
// $member = $statement->fetchAll();

echo var_dump($_POST);
echo var_dump($_FILES);
?>