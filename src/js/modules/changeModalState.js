import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionElems (event, elem, prop){
        // формирует словарь на основание заначений полей
        // получает список элементов по селектору
        // доб на каждый "событие", при событии
        // берет значение и ключ из аргумета и формирует
        // пару ключ = значение
        elem.forEach((item, i) =>{
            item.addEventListener(event, () =>{
                switch (item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = "Cold" : state[prop] = 'Warm';
                            elem.forEach((box, j) =>{
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            });
                            console.log('checkbox');
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state)
            });
        });
    };

    bindActionElems('click', windowForm, 'form')
    bindActionElems('input', windowHeight, 'height')
    bindActionElems('input', windowWidth, 'width')
    bindActionElems('change', windowType, 'type')
    bindActionElems('change', windowProfile, 'profile')
};

export default changeModalState;