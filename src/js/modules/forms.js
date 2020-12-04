const forms = () => {
    // Получить все элементы форм
    // получить все input`ы
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    // Ввод только цифры
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
           item.value = item.value.replace(/\D/, '');
        });
    });

    // варианты сообщений
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо, ваш запрос передан...',
        failure: 'Что-то пошло не так...'
    };

    // Отправка данных ч/з POST на сервер
    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text()
    };

    // Очистить все поля ввода
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    // По нажатию (событию) 'submit'
    form.forEach(item =>{
        item.addEventListener('submit', (e) =>{
            e.preventDefault();

            // Создаем блок с сообщением
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // Собираем данные из этой формы
            const formDate = new FormData(item);

            // и отправляем запрос на сервер
            postData('assets/server.php', formDate)
                .then(res => {
                    // Всё хорошо -- отправили на сервер
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(()=>{
                    // Всё плохо -- показали сообщение об ошибке
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    // Всё хорошо -- отправили на сервер и очистили поля ввода
                    clearInputs();
                    setTimeout(() =>{
                        statusMessage.remove();
                    }, 5000);
                })
        })
    })
};

export default forms;