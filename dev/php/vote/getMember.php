<?php 
session_start();
if(isset($_SESSION["memNo"]) == true){
	$result = array("memNo"=>$_SESSION["memNo"],"memName"=>$_SESSION["memName"]);
	echo json_encode($result);	
}else{
	echo "{}";
}
?>