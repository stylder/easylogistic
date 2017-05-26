<?php
return [
    'driver' => 'smtp',
    'host' => 'smtp.gmail.com',
    'port' => 587,
    'from' => ['address' => 'contactoeasylogistic@gmail.com', 'name' => 'EasyLogistic'],
    'encryption' => 'tls',
    'username' => 'contactoeasylogistic@gmail.com',
    'password' => 'wglymmfwyfsizdvb',   // it's use your google app password
    'sendmail' => '/usr/sbin/sendmail -bs',
    'pretend' => false,
];
