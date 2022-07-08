CREATE DATABASE rUsuario;

use rUsuario;

CREATE TABLE usuarios (
    id_DNI INT(8) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    lastname VARCHAR(50) NOT NULL,
    fEmision VARCHAR(50) NOT NULL,
    fNacimiento VARCHAR(50)
);

SHOW TABLES;

describe customer;