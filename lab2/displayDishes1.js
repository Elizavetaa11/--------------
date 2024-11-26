document.addEventListener('DOMContentLoaded', () => {
     // Получаем контейнеры для каждой категории блюд
    const sections = {
        soup: document.querySelector('.soup .grid-container'),
        mainCourse: document.querySelector('.main-course .grid-container'),
        salad: document.querySelector('.salad .grid-container'),
        drink: document.querySelector('.drink .grid-container'),
        dessert: document.querySelector('.dessert .grid-container')
    };

    // Получаем элементы для отображения сводки заказа и общей стоимости
    const orderSummary = document.getElementById('order-summary');
    const totalCostBlock = document.getElementById('total-cost');
    const totalCostValue = document.getElementById('total-cost-value');

    // Объект для хранения выбранных блюд
    const selectedDishes = {
        soup: null,
        mainCourse: null,
        salad: null,
        drink: null,
        dessert: null
    };

    // Функция для обновления сводки заказа
    function updateOrderSummary() {
        orderSummary.innerHTML = '';
        let totalCost = 0;

        // Проверяем, есть ли выбранные блюда
        if (!Object.values(selectedDishes).some(dish => dish)) {
            orderSummary.innerHTML = '<p>Ничего не выбрано</p>';
            totalCostBlock.style.display = 'none';
            return;
        }

        // Обновляем сводку заказа
        Object.entries(selectedDishes).forEach(([category, dish]) => {
            const categoryName = {
                soup: 'Суп',
                mainCourse: 'Главное блюдо',
                salad: 'Салат',
                drink: 'Напиток',
                dessert: 'Десерт'
            }[category];

            const div = document.createElement('div');
            div.classList.add('order-item'); // Добавляем класс для стилизации
            div.innerHTML = `<h4>${categoryName}</h4><p>${dish ? `${dish.name} ${dish.price}₽` : 'Блюдо не выбрано'}</p>`;
            orderSummary.appendChild(div);

            if (dish) {
                totalCost += parseInt(dish.price);
            }
        });

        totalCostValue.textContent = `${totalCost}₽`;
        totalCostBlock.style.display = 'block';
    }

    // Нажатие по блюду
    function handleDishClick(event) {
        const dishElement = event.currentTarget;
        const dataDish = dishElement.getAttribute('data-dish');
        const dish = dishes.find(d => d.dataDish === dataDish);

        selectedDishes[dish.category] = dish;
        updateOrderSummary();
    }

    // Функция для создания элемента блюда
    function createDishElement(dish) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.setAttribute('data-dish', dish.dataDish);
        gridItem.setAttribute('data-kind', dish.kind);
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

        return gridItem;
    }

    // ЛАБА 7

    // Функция для загрузки блюд с API
    // async function loadDishes() {
    //     try {
    //         // Отправляем запрос к API
    //         const response = await fetch('http://lab7-api.std-900.ist.mospolytech.ru/api/dishes');
    //         if (!response.ok) {
    //             throw new Error('Ошибка при загрузке блюд');
    //         }
    //         // Получаем данные в формате JSON
    //         const dishes = await response.json();

    //         // Категории блюд с сортировкой
    //         const categories = ['soup', 'mainCourse', 'salad', 'drink', 'dessert'];
    //         categories.forEach(category => {
    //             const dishesInCategory = dishes.filter(dish => dish.category === category).sort((a, b) => a.name.localeCompare(b.name));
    //             dishesInCategory.forEach(dish => {
    //                 sections[category].appendChild(createDishElement(dish));
    //             });
    //         });
    //     } catch (error) {
    //         console.error('Ошибка:', error);
    //         showNotification('Ошибка при загрузке блюд');
    //     }
    // }

    // Категории блюд с сортировкой
    const categories = ['soup', 'mainCourse', 'salad', 'drink', 'dessert'];
    categories.forEach(category => {
        const dishesInCategory = dishes.filter(dish => dish.category === category).sort((a, b) => a.name.localeCompare(b.name));
        dishesInCategory.forEach(dish => {
            sections[category].appendChild(createDishElement(dish));
        });
    });

   // Добавление обработчиков событий для фильтров
    document.querySelectorAll('.filters button').forEach(filterButton => {
        filterButton.addEventListener('click', event => {
            // Получаем значение фильтра из атрибута 'data-kind' кнопки
            const filter = event.target.getAttribute('data-kind');
            // Находим контейнер категории, который следует за контейнером фильтров
            const categoryContainer = event.target.closest('.filters').nextElementSibling;
            // Выбираем все элементы блюд внутри контейнера категории
            const dishesInCategory = categoryContainer.querySelectorAll('.grid-item');

            // проверяем, был ли фильтр уже активен
            const isActive = event.target.classList.contains('active');

            // Удаляем класс 'active' у всех кнопок фильтров
            document.querySelectorAll('.filters button').forEach(button => {
                button.classList.remove('active');
            });
            // Если фильтр не был активен, добавляем класс 'active' к нажатой кнопке
            if (!isActive) {
                event.target.classList.add('active');
            }

            // Отображение блюд в зависимости от фильтра
            dishesInCategory.forEach(dishElement => {
                // Если фильтр не активен, отображаем все блюда
                if ( !event.target.classList.contains('active')) {
                    dishElement.style.display = 'block';
                } else {
                    // Иначе отображаем только блюда, соответствующие выбранному фильтру
                    dishElement.style.display = dishElement.getAttribute('data-kind') === filter ? 'block' : 'none';
                }
            });
        });
        
    });
    
    // Функция для проверки выбранных блюд
    function validateOrder() {
        // массив выбранных блюд, исключая null значения
        const selectedDishesArray = Object.values(selectedDishes).filter(dish => dish !== null);

        // проверяем, есть ли выбранные блюда
        if (selectedDishesArray.length === 0) {
            // если нет, показываем уведомление
            showNotification('Ничего не выбрано. Выберите блюда для заказа');
            return false;
        }

        // проверяем, есть ли суп 
        const hasSoup = selectedDishesArray.some(dish => dish.category === 'soup');
        // есть ли главное блюдо 
        const hasMainCourse = selectedDishesArray.some(dish => dish.category === 'mainCourse');
        // есть ли салат в  блюда
        const hasSalad = selectedDishesArray.some(dish => dish.category === 'salad');
        // есть ли напиток 
        const hasDrink = selectedDishesArray.some(dish => dish.category === 'drink');

        // проверяем, есть ли напиток в выбранных блюдах
        if (!hasDrink) {
            // если нет, показываем уведомление 
            showNotification('Выберите напиток');
            return false;
        }

        // есть ли суп, но нет главного блюда и салата
        if (hasSoup && !hasMainCourse && !hasSalad) {
            // если да, показываем уведомление 
            showNotification('Выберите главное блюдо/салат/стартер');
            return false;
        }

        // проверяем, есть ли салат или главное блюдо, но нет супа и главного блюда
        if ((hasSalad || hasMainCourse) && !hasSoup && !hasMainCourse) {
            // если да, показываем уведомление 
            showNotification('Выберите суп или главное блюдо');
            return false;
        }

        // Проверяем, есть ли напиток, но нет главного блюда
        if (hasDrink && !hasMainCourse) {
            // Если да, показываем уведомление 
            showNotification('Выберите главное блюдо');
            return false;
        }

        // Если все проверки пройдены, возвращаем true
        return true;
    }

    // Функция для отображения уведомления
    function showNotification(message) {
        // создаем элемент div для уведомления
        const notification = document.createElement('div');
        // класс 'notification' к элементу div
        notification.className = 'notification';
        // Устанавливаем HTML-содержимое уведомления
        notification.innerHTML = `
            <p>${message}</p>
            <button>Окей 👌</button>
        `;
        // добавляем уведомление в конец body
        document.body.appendChild(notification);

        // добавляем обработчик события для кнопки "Окей"
        notification.querySelector('button').addEventListener('click', () => {
            // закрываем уведомление при нажатии на кнопку
            closeNotification(notification);
        });
    }

    // Функция для закрытия уведомления
    function closeNotification(notification) {
        // удаляем уведомление
        notification.remove();
    }

    // Добавляем обработчик события для формы
    document.querySelector('form').addEventListener('submit', event => {
        // проверка заказа перед отправкой формы
        if (!validateOrder()) {
            // Если заказ не прошел проверку, предотвращаем отправку формы
            event.preventDefault();
        }
    });

    // Вызываем функцию загрузки блюд при загрузке страницы
    loadDishes();

});
    


