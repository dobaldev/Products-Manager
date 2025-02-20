![👀 Portada Front](GestordeProductos.jpg)
![👀 Portada Back](phpMyAdmin.jpg)

# Gestor de Productos

Este es un proyecto FullStack con PHP y JavaScript que permite gestionar productos en una base de datos MySQL.  

## 🛠 Tecnologías utilizadas
- PHP (Backend)
- MySQL (Base de datos)
- JavaScript (Frontend)
- jQuery (Manipulación del DOM y AJAX)
- HTML5 y CSS3 (Interfaz de usuario)
- Git (Control de versiones)
- JSON y XML (Intercambio de datos)
- API REST (Conexión con el backend)
- PHPUnit (Pruebas unitarias)
- GitHub Actions (CI/CD)

## 📂 Estructura del Proyecto
gestor_productos/ │── public/ # Archivos frontend (HTML, CSS, JS) │ │── index.html # Página principal │ │── styles.css # Estilos CSS │ │── script.js # Lógica del frontend │ │── api/ # Backend en PHP │ │── productos.php # API para gestionar productos │ │── config/ # Configuración de la base de datos │ │── database.php # Conexión a MySQL │ │── db/ # Base de datos │ │── database.sql # Script SQL de creación de tablas │ │── tests/ # Pruebas unitarias │ │── ApiTest.php # Test para la API con PHPUnit │ │── .gitignore # Archivos que no se suben a GitHub │── README.md # Documentación del proyecto

## 🚀 Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/dobaldev/gestor_productos.git
2. Configura la base de datos en config/database.php.
3. Importa el archivo db/database.sql en MySQL.
4. Inicia un servidor local con XAMPP o ejecuta:
php -S localhost:8000 -t public
5. Abre en el navegador:
localhost:8081/phpmyadmin/

## 👀 VISTA PREVIA DEL PROYECTO: https://gestordeproductosad.netlify.app/

📌 Funcionalidades

- ✅ Agregar, editar y eliminar productos.
- ✅ Interfaz dinámica con AJAX y jQuery.
- ✅ Consumo de API REST en JSON/XML.
- ✅ Seguridad con protección contra CSRF y validaciones.
- ✅ Pruebas automatizadas con PHPUnit.

🏗 Futuras Mejoras

    Autenticación con JWT.
    Integración con Laravel.
    Implementación de Docker.
