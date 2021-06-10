/* 1 carousel */
$('#carousel-1').carousel({
  interval: 4000,
  wrap: true,
  keyboard: true
});


/* 2 carousel */
$('#carousel-2').carousel({
  interval: 6000,
  wrap: true,
  keyboard: true
});
/* 3 carousel */
$('#carousel-3').carousel({
  interval: 8000,
  wrap: true,
  keyboard: true
});

/* 4 carousel example with jumbotron */
$('#carousel-4').carousel({
  interval: 10000,
  wrap: true,
  keyboard: true
});


// close icon in tour section

let closeIcon = document.querySelector('.close_toure_icon');
let modal_tour = document.querySelector('.modal_tour');
let modal = document.querySelector('.modal');
closeIcon.addEventListener('click', function () {
  let modalbackdrop = document.querySelector('.modal-backdrop');
  modal_tour.style.display = 'none';
  modalbackdrop.classList.remove('show');
  modalbackdrop.style.display = "none";
  modal.classList.remove('show');


  // modalbackdrop.style.display = 'none'

})
