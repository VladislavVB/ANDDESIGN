//модалка
const buttonModal = document.querySelectorAll('.button-modal');
const modalCustom = document.querySelector('.modal-custom');
const modalCustomDialogContentClose = document.querySelector('.modal-custom-dialog-content-close');

const openModal = () => {
  modalCustom.classList.add('modal-custom-active');
  document.body.style.overflow = 'hidden';
}
const closeModal = () => {
  modalCustom.classList.remove('modal-custom-active');
  document.body.style.overflow = 'auto';
}

buttonModal.forEach(elem => {
  elem.addEventListener('click', openModal)
});
modalCustom.addEventListener('click', (e) => {
  if (e.target === modalCustom) {
    closeModal();
  }
});

modalCustomDialogContentClose.addEventListener('click', closeModal)


//плавные ссылки 
const anchors = document.querySelectorAll('a[href*="#src"]')
//чтобы использовать плавный скролл нужно в начале пуьт приписать src по типу srccalculate
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}