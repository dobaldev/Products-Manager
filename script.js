document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const form = document.getElementById("add-product-form");

  // Simulación de datos iniciales
  let products = [
    { id: 1, name: "Camiseta", price: 19.99, description: "Camiseta de algodón, disponible en varios colores." },
    { id: 2, name: "Pantalón", price: 39.99, description: "Pantalón casual, ideal para el día a día." },
    { id: 3, name: "Zapatos", price: 59.99, description: "Zapatos deportivos, confort y estilo en cada paso." }
  ];
  let nextId = 4;

  // Renderiza la lista de productos con una animación suave
  const renderProducts = () => {
    productList.innerHTML = "";
    if (products.length === 0) {
      productList.innerHTML = "<p class='no-products'>No hay productos disponibles.</p>";
      return;
    }
    products.forEach(product => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      productItem.innerHTML = `
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button class="delete-btn" data-id="${product.id}">Eliminar</button>
      `;
      productList.appendChild(productItem);
      // Efecto de aparición
      productItem.style.opacity = 0;
      setTimeout(() => { productItem.style.opacity = 1; }, 100);
    });
  };

  // Función para agregar un producto
  const addProduct = (e) => {
    e.preventDefault();
    const name = document.getElementById("product-name").value.trim();
    const price = parseFloat(document.getElementById("product-price").value);
    const description = document.getElementById("product-description").value.trim();

    if (!name || isNaN(price)) {
      alert("Por favor, ingresa los datos requeridos.");
      return;
    }

    const newProduct = { id: nextId++, name, price, description };
    products.push(newProduct);
    renderProducts();
    form.reset();
  };

  // Función para eliminar un producto con animación
  const deleteProduct = (id) => {
    const productElement = document.querySelector(`.delete-btn[data-id="${id}"]`).parentElement;
    productElement.style.transition = "opacity 0.5s ease-out";
    productElement.style.opacity = 0;
    setTimeout(() => {
      products = products.filter(product => product.id !== id);
      renderProducts();
    }, 500);
  };

  // Manejo del envío del formulario
  form.addEventListener("submit", addProduct);

  // Delegación de eventos para eliminar productos
  productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const id = parseInt(e.target.dataset.id);
      deleteProduct(id);
    }
  });

  // Renderiza inicialmente los productos
  renderProducts();
});