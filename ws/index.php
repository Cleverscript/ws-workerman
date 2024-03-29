<?php
/**
 * Simple websockets app with workerman
 */
use Workerman\Worker;

//Composer autoload include
require_once(__DIR__ . '/../vendor/autoload.php');

//Create websocket
$wsWorker = new Worker('websocket://0.0.0.0:2346');
$wsWorker->count = 4;

//Create collback event connect
$wsWorker->onConnect = function ($connection) {
    echo "New connection \n";
};


$wsWorker->onMessage = function ($connection, $data) use ($wsWorker) {
    
    var_dump($data);
    
    foreach ($wsWorker->connections as $clientConnection) {
        $clientConnection->send($data);
    }
};

//Create collback event close
$wsWorker->onClose = function ($connection) {
    echo "Connection close \n";
};

//
Worker::runAll();
?>