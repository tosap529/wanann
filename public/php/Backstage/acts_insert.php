<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

include("../connect_test.php");
// include("../connect.php");

// print_r(json_decode($_POST['article_info'],true)) ;

$act_info = json_decode($_POST['act_info'],true);


// if(!$article_info["title"]||!$article_info["content"]||!$article_info["category"]){
//     echo '資料不全';
 
// }else{
   
    


// }






?>