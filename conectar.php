<?php

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'vortnaut_wp37' );

/** Database username */
define( 'DB_USER', 'vortnaut_wp37' );

/** Database password */
define( 'DB_PASSWORD', 'pexS[89.9y' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );


    $link = "mysql:host=localhost;dbname=vortnaut_wp37";
    $database = "vortnaut_wp37";
    $password = "pexS[89.9y";

    try{
        $pdo = new PDO ($link, $username, $password);
    }catch(PDOException $e){
        print "!Error¡" . $e->getMessage() . "<br>";
    }
?>