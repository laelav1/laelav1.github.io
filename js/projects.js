// const open = document.getElementById('open');
// const modal_container = document.getElementById('modal-container');
// const close = document.getElementById('close');

const opens = document.querySelectorAll('.open');

for(let j = 0; j < opens.length; j++)
{
  const btn = opens[j];
  btn.addEventListener('click',()=> {
    const modal = document.querySelector('.modal-container[data-index="' + btn.getAttribute('data-index') + '"]');
    const close = modal.querySelector('.close');
    modal.classList.add('show');
    const closeFunction = ()=> {
      modal.classList.remove('show');
      close.removeEventListener('click', closeFunction);
    };
    close.addEventListener('click', closeFunction);
  });
}

// open.addEventListener('click',()=> {
//   modal_container.classList.add('show');
// });
//
// close.addEventListener('click',()=> {
//   modal_container.classList.remove('show');
// });
