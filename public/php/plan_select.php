<?php

include("connect.php");

$pdo = getPDO();
$statement = $pdo->prepare("select 
m.USERNAME, m.MEMBER_PIC, sc.SERVICE_ATTITUDE, sc.SERVICE_QUALITY, sc.CONTENT,sc.STATUS,srt.SERVICE_ID
from SERVICE_ORDER so
join SERVICE_COMMENT sc on so.SERVICE_COMMENT_ID = sc.ID
join SERVICE_RESERVE_TIME srt on so.SERVICE_RESERVE_TIME_ID = srt.ID
join MEMBER m on m.ID = so.MEMBER_ID
where sc.STATUS = 1 and srt.SERVICE_ID=1");

$statement ->execute();
$commentAllData['A'] = $statement->fetchAll();

$pdo = getPDO();
$statement = $pdo->prepare("select 
m.USERNAME, m.MEMBER_PIC, sc.SERVICE_ATTITUDE, sc.SERVICE_QUALITY, sc.CONTENT,sc.STATUS,srt.SERVICE_ID
from SERVICE_ORDER so
join SERVICE_COMMENT sc on so.SERVICE_COMMENT_ID = sc.ID
join SERVICE_RESERVE_TIME srt on so.SERVICE_RESERVE_TIME_ID = srt.ID
join MEMBER m on m.ID = so.MEMBER_ID
where sc.STATUS = 1 and srt.SERVICE_ID=2");

$statement ->execute();
$commentAllData['B'] = $statement->fetchAll();


$pdo = getPDO();
$statement = $pdo->prepare("select 
m.USERNAME, m.MEMBER_PIC, sc.SERVICE_ATTITUDE, sc.SERVICE_QUALITY, sc.CONTENT,sc.STATUS,srt.SERVICE_ID
from SERVICE_ORDER so
join SERVICE_COMMENT sc on so.SERVICE_COMMENT_ID = sc.ID
join SERVICE_RESERVE_TIME srt on so.SERVICE_RESERVE_TIME_ID = srt.ID
join MEMBER m on m.ID = so.MEMBER_ID
where sc.STATUS = 1 and srt.SERVICE_ID=3");

$statement ->execute();
$commentAllData['C'] = $statement->fetchAll();

echo json_encode($commentAllData);

?>