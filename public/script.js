// Espera a que se cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    // Carga inicial de productos (simulados)
    loadProducts();
  
    // Maneja el envío del formulario para agregar un producto
    const form = document.getElementById("add-product-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita el envío tradicional del formulario
      addProduct();
    });
  });
  
  // Función para simular la carga de productos
  function loadProducts() {
    const productList = document.getElementById("product-list");
    
    // Simulación de productos
    const products = [
      { id: 1, name: "Producto 1", price: 10.50, description: "Descripción del producto 1" },
      { id: 2, name: "Producto 2", price: 20.00, description: "Descripción del producto 2" },
      { id: 3, name: "Producto 3", price: 15.75, description: "Descripción del producto 3" }
    ];
  
    // Limpia la lista actual
    productList.innerHTML = "";
  
    // Recorre y muestra cada producto
    products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p>Precio: $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productItem);
    });
  }
  
  // Función para agregar un producto (simulación)
  function addProduct() {
    // Obtiene los valores del formulario
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const description = document.getElementById("product-description").value;
  
    // Validación básica
    if (!name || !price) {
      alert("Por favor, complete los campos obligatorios.");
      return;
    }
  
    // Crear un nuevo elemento para el producto
    const productList = document.getElementById("product-list");
    const productItem = document.createElement("div");
    productItem.className = "product-item";
    productItem.innerHTML = `
      <h3>${name}</h3>
      <p>Precio: $${parseFloat(price).toFixed(2)}</p>
      <p>${description}</p>
    `;
    
    // Agrega el producto a la lista
    productList.appendChild(productItem);
  
    // Limpia el formulario
    document.getElementById("add-product-form").reset();
  }
  