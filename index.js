const args = process.argv.slice(2);
const API_URL = 'https://fakestoreapi.com/products';

if (args.length === 0) {
  console.log('Por favor, ingresa un comando. Ejemplo: npm run start GEtproducts');
  process.exit(1);
}

const command = args[0].toUpperCase();
const param = args[1];

const manageProducts = async () => {
  try {
    if (command === 'GETPRODUCTS') {
      const response = await fetch(API_URL);
      const data = await response.json();
      
      const previewData = data.map(({ id, title, price, ...restoDelProducto }) => {
        return {
          id,
          title: title.length > 25 ? title.substring(0, 25) + '...' : title,
          price,
          ...restoDelProducto
        };
      });

      console.log('📦 --- LISTA COMPLETA DE PRODUCTOS ---');
      console.log(previewData);
    } else if (command === 'GET' && param && param.includes('products/')) {
      const [, productId] = param.split('/');
      
      const response = await fetch(`${API_URL}/${productId}`);
      const product = await response.json();
      
      console.log(`🔍 --- PRODUCTO ID: ${productId} ---`);
      console.log(product);
    } else if (command === 'POST' && param === 'products') {
      const [, , title, price, category] = args;
      
      const newProduct = {
        title,
        price: Number(price),
        category
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      
      const result = await response.json();
      
      console.log(' --- NUEVO PRODUCTO CREADO ---');
      console.log({ ...newProduct, id: result.id });
    } else if (command === 'DELETE' && param && param.includes('products/')) {
      const urlParts = param.split('/');
      const productId = urlParts[1];

      const response = await fetch(`${API_URL}/${productId}`, {
        method: 'DELETE'
      });
      
      const result = await response.json();
      
      console.log(` --- PRODUCTO ELIMINADO EXITOSAMENTE ---`);
      console.log(result);
    } else {
      console.log(' Comando no reconocido. Verifica la sintaxis.');
    }
  } catch (error) {
    console.error(' Ocurrió un error al conectar con la API:', error.message);
  }
};

manageProducts();