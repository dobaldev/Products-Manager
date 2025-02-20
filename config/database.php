<?php
$host = "localhost";
$dbname = "gestor_productos";
$username = "root"; // Cambia esto si tienes otra configuración
$password = "";

// Crear conexión
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
