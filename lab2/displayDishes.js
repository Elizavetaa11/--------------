document.addEventListener('DOMContentLoaded', () => {
    //получение элементов разделов (ссылки на контейнеры, в которых будут отображаться блюда категорий)
    const soupSection = document.querySelector('.soup .grid-container');
    const mainCourseSection = document.querySelector('.main-course .grid-container');
    const drinkSection = document.querySelector('.drink .grid-container');
    //элементы для отображения раздела о заказе 
    const orderSummary = document.getElementById('order-summary');
    const totalCostBlock = document.getElementById('total-cost');
    const totalCostValue = document.getElementById('total-cost-value');
    // объект храненит выбранные блюда
    const selectedDishes = {
        soup: null,
        mainCourse: null,
        drink: null
    };

    //функция для обновления сводки заказа
    function updateOrderSummary() {
        orderSummary.innerHTML = '';//очищаем содержимое сводки заказа
        let totalCost = 0;//инициализируем общую стоимость

        //если ни одно блюдо не выбрано, отображается сообщение и скрывается блок общей стоимости
        if (!selectedDishes.soup && !selectedDishes.mainCourse && !selectedDishes.drink) {
            orderSummary.innerHTML = '<p>Ничего не выбрано</p>';
            totalCostBlock.style.display = 'none';
            return;
        }

        //отображается выбранный суп или сообщение, если суп не выбран
        if (selectedDishes.soup) {
            const soupDiv = document.createElement('div');
            soupDiv.innerHTML = `<h4>Суп</h4><p>${selectedDishes.soup.name} ${selectedDishes.soup.price}₽</p>`;
            orderSummary.appendChild(soupDiv);
            totalCost += parseInt(selectedDishes.soup.price);
        } else {
            const soupDiv = document.createElement('div');
            soupDiv.innerHTML = `<h4>Суп</h4><p>Блюдо не выбрано</p>`;
            orderSummary.appendChild(soupDiv);
        }

        //отображается выбранное главное блюдо или сообщение, если блюдо не выбрано
        if (selectedDishes.mainCourse) {
            const mainCourseDiv = document.createElement('div');
            mainCourseDiv.innerHTML = `<h4>Главное блюдо</h4><p>${selectedDishes.mainCourse.name} ${selectedDishes.mainCourse.price}₽</p>`;
            orderSummary.appendChild(mainCourseDiv);
            totalCost += parseInt(selectedDishes.mainCourse.price);
        } else {
            const mainCourseDiv = document.createElement('div');
            mainCourseDiv.innerHTML = `<h4>Главное блюдо</h4><p>Блюдо не выбрано</p>`;
            orderSummary.appendChild(mainCourseDiv);
        }

        //отображается выбранный напиток или сообщение, если напиток не выбран
        if (selectedDishes.drink) {
            const drinkDiv = document.createElement('div');
            drinkDiv.innerHTML = `<h4>Напиток</h4><p>${selectedDishes.drink.name} ${selectedDishes.drink.price}₽</p>`;
            orderSummary.appendChild(drinkDiv);
            totalCost += parseInt(selectedDishes.drink.price);
        } else {
            const drinkDiv = document.createElement('div');
            drinkDiv.innerHTML = `<h4>Напиток</h4><p>Напиток не выбран</p>`;
            orderSummary.appendChild(drinkDiv);
        }

        //обновляется и отображается общая стоимость
        totalCostValue.textContent = `${totalCost}₽`;
        totalCostBlock.style.display = 'block';
    }

    //нажатие на блюдо
    function handleDishClick(event) {
        const dishElement = event.currentTarget;
        const dataDish = dishElement.getAttribute('data-dish');
        const dish = dishes.find(d => d.dataDish === dataDish);

        //выбранное блюдо в категории обновляется
        if (dish.category === 'soup') {
            selectedDishes.soup = dish;
        } else if (dish.category === 'main-course') {
            selectedDishes.mainCourse = dish;
        } else if (dish.category === 'drink') {
            selectedDishes.drink = dish;
        }

        //сводка заказа обновляется
        updateOrderSummary();
    }

    //сортировка блюд в алфавитном порядке
    const soups = dishes.filter(dish => dish.category === 'soup').sort((a, b) => a.name.localeCompare(b.name));
    const mainCourses = dishes.filter(dish => dish.category === 'main-course').sort((a, b) => a.name.localeCompare(b.name));
    const drinks = dishes.filter(dish => dish.category === 'drink').sort((a, b) => a.name.localeCompare(b.name));

    //добавление супов в раздел супов
    soups.forEach(dish => {
        //контейнер для блюда
        const gridItem = document.createElement('div');//'div' = контейнер блюда
        gridItem.classList.add('grid-item');//для стилизации
        gridItem.setAttribute('data-dish', dish.dataDish);//'ata-dish' = идентификация
        gridItem.addEventListener('click', handleDishClick);

        //контейнер для изображения
        const productImage = document.createElement('div');//'div' = изображение блюда
        productImage.classList.add('produtc-image');//для стилизации
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        productImage.appendChild(img);

        //контейнер для деталей заказа
        const productDetails = document.createElement('div');//'div' = для деталей блюда
        productDetails.classList.add('produtc-details');//для стилизации
        const price = document.createElement('p');
        price.classList.add('into');
        price.textContent = `${dish.price} ₽`;
        const name = document.createElement('p');
        name.classList.add('name_produtc');
        name.textContent = dish.name;
        const weight = document.createElement('p');
        weight.classList.add('weight');
        weight.textContent = dish.weight;
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = 'Добавить';

        //добавление деталей о блюде в контейнер
        productDetails.appendChild(price);
        productDetails.appendChild(name);
        productDetails.appendChild(weight);
        productDetails.appendChild(button);

        //добавление деталей о блюде и изображения в контейнер
        gridItem.appendChild(productImage);
        gridItem.appendChild(productDetails);

        //добавление контейнера блюда в раздел супов
        soupSection.appendChild(gridItem);
    });

    mainCourses.forEach(dish => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-dish', dish.dataDish);
        gridItem.addEventListener('click', handleDishClick);

        const productImage = document.createElement('div');
        productImage.classList.add('produtc-image');
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        productImage.appendChild(img);

        const productDetails = document.createElement('div');
        productDetails.classList.add('produtc-details');
        const price = document.createElement('p');
        price.classList.add('into');
        price.textContent = `${dish.price} ₽`;
        const name = document.createElement('p');
        name.classList.add('name_produtc');
        name.textContent = dish.name;
        const weight = document.createElement('p');
        weight.classList.add('weight');
        weight.textContent = dish.weight;
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = 'Добавить';

        productDetails.appendChild(price);
        productDetails.appendChild(name);
        productDetails.appendChild(weight);
        productDetails.appendChild(button);

        gridItem.appendChild(productImage);
        gridItem.appendChild(productDetails);

        mainCourseSection.appendChild(gridItem);
    });

    drinks.forEach(dish => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-dish', dish.dataDish);
        gridItem.addEventListener('click', handleDishClick);

        const productImage = document.createElement('div');
        productImage.classList.add('produtc-image');
        const img = document.createElement('img');
        img.src = dish.image;
        img.alt = dish.name;
        productImage.appendChild(img);

        const productDetails = document.createElement('div');
        productDetails.classList.add('produtc-details');
        const price = document.createElement('p');
        price.classList.add('into');
        price.textContent = `${dish.price} ₽`;
        const name = document.createElement('p');
        name.classList.add('name_produtc');
        name.textContent = dish.name;
        const weight = document.createElement('p');
        weight.classList.add('weight');
        weight.textContent = dish.weight;
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = 'Добавить';

        productDetails.appendChild(price);
        productDetails.appendChild(name);
        productDetails.appendChild(weight);
        productDetails.appendChild(button);

        gridItem.appendChild(productImage);
        gridItem.appendChild(productDetails);

        drinkSection.appendChild(gridItem);
    });
});
