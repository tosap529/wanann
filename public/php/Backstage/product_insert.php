<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("../connect_test.php");
// include("../connect.php");

// print_r(json_decode($_POST['article_info'],true)) ;

$product_info = json_decode($_POST['product_info'],true);


if(!$product_info["productName"]){
    echo '資料不全';
 
}else{
   
    
// echo $article_info['title'];
// echo $article_info['pic'];
// echo $article_info['summernote'];

$pdo = getPDO();
$statement = $pdo->prepare("
    insert into
    PRODUCT ( PRODUCT_NAME, SLOGAN1, SLOGAN2, PRODUCT_PIC1, PRODUCT_PIC2, PRODUCT_PIC3, PRODUCT_PRICE, PRODUCT_STYLE, PRODUCT_CONTENT,  PRODUCT_SUBCONTENT1, PRODUCT_SUBCONTENT2, CREATE_TIME, PRODUCT_CATEGORY_ID, STATUS) 
    values
    (:productName, :slogan1, :slogan2, :pic1, :pic2, :pic3, :price, :style, :content, :subcontent1, :subcontent2, now(), :category, 1)
    ");
// 這裡CREATE_TIME只存DATE，需特別注意，insert圖片亦需以ID排序去找
$statement ->bindValue(":productName", $product_info["productName"]);
$statement ->bindValue(":slogan1", $product_info["slogan1"]);
$statement ->bindValue(":slogan2", $product_info["slogan2"]);
$statement ->bindValue(":pic1", $product_info["pic1"]);
$statement ->bindValue(":pic2", $product_info["pic2"]);
$statement ->bindValue(":pic3", $product_info["pic3"]);
$statement ->bindValue(":price", $product_info["price"]);
$statement ->bindValue(":style", $product_info["style"]);
$statement ->bindValue(":content", $product_info["content"]);
$statement ->bindValue(":subcontent1", $product_info["subcontent1"]);
$statement ->bindValue(":subcontent2", $product_info["subcontent2"]);
$statement ->bindValue(":category", $product_info["category"]);
$statement ->bindValue(":status", $product_info["status"]);

$statement ->execute();

$pdo = getPDO();
$statement = $pdo->prepare("
    select ID 
    from PRODUCT
    order by ID desc
    limit 1");
$statement ->execute();
$productID = $statement->fetch();
$self = 'product_new_'.$productID['ID']; //組成自定義圖片名稱，後面是文章ID
echo $productID['ID'];

//取得檔案副檔名
function getExtensionName($filePath){
    $path_parts = pathinfo($filePath);
    return $path_parts["extension"];
}

//取得上傳的檔案資訊=======================================
$fileName = $_FILES["product_pic"]["name"];    //檔案名稱含副檔名        
$filePath_Temp = $_FILES["product_pic"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
$fileType = $_FILES["product_pic"]["type"];    //檔案種類        
$fileSize = $_FILES["product_pic"]["size"];    //檔案尺寸
//=======================================================

$productPicPath = "/thd104/g1/img/product/product_new/";
 //Web根目錄真實路徑
 $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
 // echo $ServerRoot;
 //檔案最終存放位置
 $filePath = $ServerRoot."/thd104/g1/public/img/product/product_new/".$fileName;
 // 上線用－自訂名稱
 $fileNewPath = $ServerRoot.$productPicPath.$self.'.'.getExtensionName($filePath);
 $fileNewName = $productPicPath.$self.'.'.getExtensionName($filePath);
 // 測試用－自訂名稱
 $fileTestPath =$ServerRoot."/thd104/g1/public/img/product/product_new/".$self.'.'.getExtensionName($filePath);
 $fileTestName =$productPicPath.$self.'.'.getExtensionName($filePath);

 //將暫存檔搬移到正確位置
 move_uploaded_file($filePath_Temp, $fileTestPath);
 // move_uploaded_file($filePath_Temp, $fileNewPath);



// 將圖片路徑存進資料庫
$pdo = getPDO();
// 上線用
// $statement = $pdo->prepare("update ARTICLE set PIC = '".$fileNewName."' where ID=:id");
// 測試用
$statement = $pdo->prepare("update PRODUCT set PRODUCT_PIC1 = '". $fileTestName."', PRODUCT_PIC2= '". $fileTestName."', PRODUCT_PIC3= '". $fileTestName."' where ID=:id");
$statement = $pdo->prepare("update PRODUCT set PRODUCT_PIC1 = '". $fileTestName."' where ID=:id");
$statement ->bindValue(":id", $productID['ID']);
$statement ->execute();

}

