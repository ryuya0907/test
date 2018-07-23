<?php
md_internal_encoding("utf8");
$pdo=new PDO("mysql:dbname=lesson01; host=localhost;","root","");
$pdo->exec("insert into 4each_keijiban(handlename,title,comments)values
('".$POST['handleneme']."','".$_POST['title']."','".$POST['commnts']."');");
header("Location:http://localhost/4each_keijiban/index.php");
?>