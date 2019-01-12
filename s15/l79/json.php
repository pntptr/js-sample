<?php
    // PHP PAGE TO CREATE A JSON FILE

    $res = [
        'name' => 'Daniele',
        'address' => ['street' => 'Fratelli Rossetti', 'city' => 'Castelvetro Piacentino'],
        'languages' => ['italian', 'english', 'german', 'french']
    ];

    echo json_encode($res);
