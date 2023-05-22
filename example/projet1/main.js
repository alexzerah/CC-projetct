import './style.css';

const cardsList = document.querySelectorAll('.card');

cardsList.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('isActive');
    cardsList.forEach(c => {
      if (c !== card) {
          c.classList.add('lessVisible')
      }

  })
  })

  card.addEventListener('mouseleave', () => {
    card.classList.remove('isActive');
    cardsList.forEach(c => {
      if (c !== card) {
          c.classList.remove('lessVisible')
      }
      
  })
  })

});
