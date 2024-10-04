const inventario = [
    { codigo: 1, descripcion: 'Camiseta Jordan', costo: 650 },
    { codigo: 2, descripcion: 'Pantalón Nike', costo: 2100 },
    { codigo: 3, descripcion: 'Chaqueta Nike Edición Especial', costo: 2700 },
];

let cesta = [];

// Función flecha para añadir un artículo a la cesta
const añadirACesta = (codigoArticulo) => {
    const articulo = inventario.find(item => item.codigo === codigoArticulo);
    
    if (articulo) {
        cesta.push(articulo);
        console.log(`${articulo.descripcion} añadido a la cesta.`);
        mostrarCesta();
    } else {
        console.log('Artículo no encontrado.');
    }
};

// Función para mostrar la cesta y el total en la consola
const mostrarCesta = () => {
    console.clear();
    console.log('Cesta de la compra:');
    
    let sumaTotal = 0;

    cesta.forEach(item => {
        console.log(`${item.descripcion} - $${item.costo}`);
        sumaTotal += item.costo;
    });

    console.log(`Total: $${sumaTotal.toFixed(2)}`);
};

// Función que muestra los artículos disponibles en un alert y permite seleccionarlos
const iniciarCompra = () => {
    let enProceso = true;

    while (enProceso) {
        let opciones = 'Elige una opción:\n\n';
        inventario.forEach(item => {
            opciones += `${item.codigo}. ${item.descripcion} - Precio: $${item.costo}\n`;
        });
        opciones += '\n4. Ver total de la cesta\n5. Salir';

        let seleccion = parseInt(prompt(opciones));

        if (seleccion >= 1 && seleccion <= 3) {
            añadirACesta(seleccion);
        } else if (seleccion === 4) {
            mostrarTotalCesta();
        } else if (seleccion === 5) {
            console.log('Cerrando la tienda...');
            enProceso = false;
        } else {
            alert('Opción no válida, intenta de nuevo.');
        }
    }
};

// Función que muestra el contenido de la cesta y el total en un alert
const mostrarTotalCesta = () => {
    if (cesta.length === 0) {
        alert('La cesta está vacía.');
        return;
    }

    let mensajeCesta = 'Cesta de la compra:\n\n';
    let sumaTotal = 0;

    cesta.forEach(item => {
        mensajeCesta += `${item.descripcion} - $${item.costo}\n`;
        sumaTotal += item.costo;
    });

    mensajeCesta += `\nTotal: $${sumaTotal.toFixed(2)}`;
    alert(mensajeCesta);
};
