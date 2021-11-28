const openPopup = document.getElementById('open-popup');
const closePopup = document.getElementById('popup-body__close');
const Popup = document.getElementById('popup');
const get = document.getElementById('popup-body__button');

openPopup.addEventListener('click', function(event){
    event.preventDefault();
    Popup.classList.add('active');
})

closePopup.addEventListener('click', () =>{
    Popup.classList.remove('active');
})

get.addEventListener('click', () =>{
    Popup.classList.remove('active');
})