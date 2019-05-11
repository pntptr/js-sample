<?php
    $data = [
        [
            'title' => 'PHP 7',
            'author' => 'Enrico Zimuel',
            'date_published' => '2019-01-11'
        ],
        [
            'title' => 'HTML/CSS3, The complete guide',
            'author' => 'Pellegrino Principe',
            'date_published' => '2018-01-01'
        ],
        [
            'title' => 'Angular.JS',
            'author' => 'Pellegrino Principe',
            'date_published' => '2019-01-01'
        ]
    ];

    header('Content-type:application/json');
    echo json_encode($data);
    exit();
    