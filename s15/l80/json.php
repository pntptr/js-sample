<?php

    // RETURNS A JSON OBJECT VIA PHP
    $jsonString = json_decode($_GET['json']);
    echo json_encode($jsonString);
    die();

    // PHP PAGE TO CREATE A JSON FILE
    $name = $_GET['name'];
    $age = $_GET['age'];

    $res = [
        'name' => $name,
        'age' => $age,
        'address' => ['street' => 'Fratelli Rossetti', 'city' => 'Castelvetro Piacentino'],
        'languages' => ['italian', 'english', 'german', 'french']
    ];

    echo json_encode($res);
