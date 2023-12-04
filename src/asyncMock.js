const products = [
    // Mochilas
    {id: '1', name: 'Mochila Senderismo', price: 59.99, category: 'Mochilas', img: 'https://acdn.mitiendanube.com/stores/246/804/products/110-108331-f0560d563a113c7c8516371578122570-1024-1024.jpg', stock: 15, description: 'Mochila resistente diseñada para senderismo.'},
    {id: '2', name: 'Mochila Urbana', price: 39.99, category: 'Mochilas', img: 'https://acdn.mitiendanube.com/stores/246/804/products/110-108331-f0560d563a113c7c8516371578122570-1024-1024.jpg', stock: 20, description: 'Mochila moderna y versátil para uso diario.'},
    {id: '3', name: 'Mochila Deportiva', price: 49.99, category: 'Mochilas', img: 'https://acdn.mitiendanube.com/stores/246/804/products/110-108331-f0560d563a113c7c8516371578122570-1024-1024.jpg', stock: 18, description: 'Mochila diseñada para actividades deportivas.'},
    {id: '4', name: 'Linterna LED Compacta', price: 14.99, category: 'Linternas', img: 'https://seguridadglobal.com.ar/wp-content/uploads/2018/10/Linterna-forntal-PIXA-2-PETZL.jpg', stock: 25, description: 'Linterna portátil con tecnología LED.'},
    {id: '5', name: 'Linterna Recargable', price: 24.99, category: 'Linternas', img: 'https://seguridadglobal.com.ar/wp-content/uploads/2018/10/Linterna-forntal-PIXA-2-PETZL.jpg', stock: 22, description: 'Linterna con batería recargable.'},
    {id: '6', name: 'Linterna de Camping', price: 19.99, category: 'Linternas', img: 'https://seguridadglobal.com.ar/wp-content/uploads/2018/10/Linterna-forntal-PIXA-2-PETZL.jpg', stock: 20, description: 'Linterna ideal para camping.'},
    {id: '7', name: 'Zapatillas Deportivas', price: 49.99, category: 'Calzado', img: 'https://http2.mlstatic.com/D_NQ_NP_766122-MLA49777209163_042022-O.webp', stock: 15, description: 'Zapatillas ideales para actividades deportivas.'},
    {id: '8', name: 'Botas de Montaña', price: 79.99, category: 'Calzado', img: 'https://http2.mlstatic.com/D_NQ_NP_766122-MLA49777209163_042022-O.webp', stock: 12, description: 'Botas resistentes para montañismo.'},
    {id: '9', name: 'Zapatos Casuales', price: 29.99, category: 'Calzado', img: 'https://http2.mlstatic.com/D_NQ_NP_766122-MLA49777209163_042022-O.webp', stock: 18, description: 'Zapatos cómodos para uso diario.'},
   
  ];

export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductById=(productId) =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(prod =>prod.id ===productId))
        },500)  
    })
}

export const getProductsByCategory=(productCategory) =>{
   
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(prod =>prod.category ===productCategory))
        },500) 
        
    })
}