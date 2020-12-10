import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWith = document.querySelector('#width'),
        windowHeight = document.querySelector('#height'),
        windowType = document.querySelector('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionElems (event, elem, prop){
        elem.forEach((item, i) =>{
            item.addEventListener(event, () =>{
                state[prop] = i;
                console.log(state);
            });
        });
    };

    bindActionElems('click', windowForm, 'form')
};

export default changeModalState;