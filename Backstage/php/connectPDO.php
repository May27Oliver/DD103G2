<?php
 $dsn = "mysql:host=localhost;port=3306;dbname=dd103g2;charset=utf8";
 $user = "root";
 $password = "36920-2";
 $options = array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
 $pdo = new PDO( $dsn, $user, $password, $options);  
?>