<?php
header("Content-Type: application/json");
include("../config/database.php");

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET': // Obtener todos los productos
        $result = $conn->query("SELECT * FROM productos");
        $productos = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($productos);
        break;

    case 'POST': // Agregar un producto
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $conn->prepare("INSERT INTO productos (nombre, precio, descripcion) VALUES (?, ?, ?)");
        $stmt->bind_param("sds", $data['nombre'], $data['precio'], $data['descripcion']);
        $stmt->execute();
        echo json_encode(["mensaje" => "Producto agregado"]);
        break;

    case 'DELETE': // Eliminar un producto
        parse_str(file_get_contents("php://input"), $data);
        $stmt = $conn->prepare("DELETE FROM productos WHERE id = ?");
        $stmt->bind_param("i", $data['id']);
        $stmt->execute();
        echo json_encode(["mensaje" => "Producto eliminado"]);
        break;
}
