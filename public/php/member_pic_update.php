<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
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

    //Web根目錄真實路徑
    $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
    
    //檔案最終存放位置
    $filePath = $ServerRoot."/wanann/public/img/member/member_pic/".$fileName;
    // 上線用－自訂名稱
    $fileNewPath = $ServerRoot."/wanann/public/img/member/member_pic/".'yourname.'.getExtensionName($filePath);
    // 測試用－自訂名稱
    $fileTestPath ="../img/member/member_pic/".'yourname.'.getExtensionName($filePath);

    //將暫存檔搬移到正確位置
    move_uploaded_file($filePath_Temp, $fileTestPath);

    //顯示檔案資訊
    echo "filePath：".$filePath;
    echo "<br/>";
    echo "fileType：".$fileType;
    echo "<br/>";
    echo "fileSize：".$fileSize;
    echo "<br/>";
    echo "extensionName：".getExtensionName($filePath);
    echo "<br/>";
    echo "<img src='../img/".$fileName."'/>";
}

//取得檔案副檔名
function getExtensionName($filePath){
    $path_parts = pathinfo($filePath);
    return $path_parts["extension"];
}
include("connect_test.php");

$pdo = getPDO();
// 上線用
// $statement = $pdo->prepare("update MEMBER set MEMEBER_PIC = '".$fileNewPath."' where ID=9");
// 測試用
$statement = $pdo->prepare("update MEMBER set MEMEBER_PIC = '".$fileTestPath."' where ID=9");
$statement ->execute();
// $member = $statement->fetchAll();
?>