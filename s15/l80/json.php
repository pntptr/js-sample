<?php
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
