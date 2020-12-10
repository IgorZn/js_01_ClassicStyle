const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector)

    // Ввод только цифры
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
           item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;