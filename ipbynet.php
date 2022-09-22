<?php
$user_agent = $_SERVER['HTTP_USER_AGENT'];
if (preg_match('/curl/i', $user_agent)) {
    $pub_ipv4 = file_get_contents('https://api.ipify.org');
    $pub_ipv6 = file_get_contents('https://api64.ipify.org');
    if ($pub_ipv4 == $pub_ipv6) {
        echo $pub_ipv4;
    } else {
        echo $pub_ipv4 . ' - ' . $pub_ipv6;
    }
} else {
    header( 'Location: https://leelsey.github.io/IPbyNet/' );
}
?>
