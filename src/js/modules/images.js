const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.querySelector('img'),
        body = document.querySelector('body')

    // <div class='pop'></div>
    imgPopup.classList.add('popup');

    // <div class='works'>
    //      <div class='popup'>
    //      </div>
    // </div>
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = "";
            body.classList.add('stop-scrolling');
        };

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            body.classList.remove('stop-scrolling');
        };


    });
};

export default images;