
const openModalButton = document.querySelector('.btn_subscribe');
const closeModalButton = document.querySelector('.btn_modal');
const modalPage = document.querySelector('#modalPage');


function openModalPage(){
    modalPage.style.display = 'flex';
}

function closeModalPage(){
    modalPage.style.display = 'none';
}


openModalButton.addEventListener('click', openModalPage)
closeModalButton.addEventListener('click', closeModalPage)