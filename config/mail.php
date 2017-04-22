<?php
return [
    'driver' => 'smtp',
    'host' => 'smtp.gmail.com',
    'port' => 587,
    'from' => ['address' => 'contactonannypets@gmail.com', 'name' => 'EasyLogistic'],
    'encryption' => 'tls',
    'username' => 'contactonannypets@gmail.com',
    'password' => 'hyquuhljazozlncg',   // it's use your google app password
    'sendmail' => '/usr/sbin/sendmail -bs',
    'pretend' => false,
];
