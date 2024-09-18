let products = [];

document.getElementById('product-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const preco = document.getElementById('preco').value;
  const grama = document.getElementById('grama').value;
  const PrecoPorGrama = (preco / grama).toFixed(3);
  const productName = `Produto ${products.length + 1}`;
  products.push({ name: productName, PrecoPorGrama: PrecoPorGrama });
  document.getElementById('preco').value = '';
  document.getElementById('grama').value = '';
  renderProductList();
});

function renderProductList() {
  const productListElement = document.getElementById('product-list');
  productListElement.innerHTML = '';
  products.sort((a, b) => a.PrecoPorGrama - b.PrecoPorGrama);
  products.forEach((product, index) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `${index + 1}. ${product.name} - R$ ${product.PrecoPorGrama} por grama`;
    productListElement.appendChild(productElement);
  });
}