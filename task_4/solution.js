// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let data = JSON.parse(json);
    return data.products;
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i <= length - 1; i++) {
        addProduct(products[i]);
    }    
}

// Конец решения задания №4.1.
