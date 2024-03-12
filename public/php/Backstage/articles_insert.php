<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("../connect.php");


$article_info = json_decode($_POST['article_info'],true);


if(!$article_info["title"]||!$article_info["content"]||!$article_info["category"]){
    echo '資料不全';
 
}else{
   
$pdo = getPDO();
$statement = $pdo->prepare("
    insert into
    ARTICLE (TITLE,PIC,CONTENT,CREATE_TIME,CATEGORY,SUMMERNOTE,STATUS) 
    values
    (:title, :pic, :content, CURDATE(), :category, :summernote, :status)
    ");
// 這裡CREATE_TIME只存DATE，需特別注意，insert圖片亦需以ID排序去找
$statement ->bindValue(":title", $article_info["title"]);
$statement ->bindValue(":pic", $article_info["pic"]);
$statement ->bindValue(":content", $article_info["content"]);
$statement ->bindValue(":category", $article_info["category"]);
$statement ->bindValue(":summernote", $article_info["summernote"]);
$statement ->bindValue(":status", '1');
$statement ->execute();

$pdo = getPDO();
$statement = $pdo->prepare("
    select ID 
    from ARTICLE
    order by ID desc
    limit 1");
$statement ->execute();
$articleID = $statement->fetch();
$self = 'article_new_'.$articleID['ID']; //組成自定義圖片名稱，後面是文章ID
echo $articleID['ID'];

//取得檔案副檔名
function getExtensionName($filePath){
    $path_parts = pathinfo($filePath);
    return $path_parts["extension"];
}

//取得上傳的檔案資訊=======================================
$fileName = $_FILES["article_pic"]["name"];    //檔案名稱含副檔名        
$filePath_Temp = $_FILES["article_pic"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
$fileType = $_FILES["article_pic"]["type"];    //檔案種類        
$fileSize = $_FILES["article_pic"]["size"];    //檔案尺寸
//=======================================================

$articlePicPath = "/thd104/g1/img/article/article_new/";
 //Web根目錄真實路徑
 $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
 // echo $ServerRoot;
 //檔案最終存放位置
 $filePath = $ServerRoot."/thd104/g1/public/img/article/article_new/".$fileName;
 // 上線用－自訂名稱
 $fileNewPath = $ServerRoot.$articlePicPath.$self.'.'.getExtensionName($filePath);
 $fileNewName = $articlePicPath.$self.'.'.getExtensionName($filePath);
 // 測試用－自訂名稱
//  $fileTestPath =$ServerRoot."/thd104/g1/public/img/article/article_new/".$self.'.'.getExtensionName($filePath);
//  $fileTestName =$articlePicPath.$self.'.'.getExtensionName($filePath);

 //將暫存檔搬移到正確位置
 move_uploaded_file($filePath_Temp, $fileNewPath);
 // move_uploaded_file($filePath_Temp, $fileNewPath);



// 將圖片路徑存進資料庫
$pdo = getPDO();
// 上線用
// $statement = $pdo->prepare("update ARTICLE set PIC = '".$fileNewName."' where ID=:id");
// 測試用
$statement = $pdo->prepare("update ARTICLE set PIC = '". $fileNewName."' where ID=:id");
$statement ->bindValue(":id", $articleID['ID']);
$statement ->execute();

}






?>