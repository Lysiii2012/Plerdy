
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        400: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1000: {
            slidesPerView: 4.1,
            spaceBetween: 10
        }
    }
  });



let nav = document.querySelector('.header_nav')
let burger = document.querySelector('.burger');
    burger.addEventListener('click', function(e) {
    burger.classList.toggle('active')
    nav.classList.toggle('show')
});

let openlWindow = document.querySelector('.modalWindow');
let opWindow = document.querySelector('.modWindow');
let btnWindow = document.querySelector('.btnWindow');

let modalWindow = document.querySelector('.active_window');
let close_mod = document.querySelector('.close_modal')

btnWindow.addEventListener('click', function() {
    modalWindow.classList.toggle('show_window')
})
openlWindow.addEventListener('click', function() {
    modalWindow.classList.toggle('show_window')
})
opWindow.addEventListener('click', function() {
    modalWindow.classList.toggle('show_window')
})

close_mod.addEventListener('click', function(){
    modalWindow.classList.remove('show_window')
})



let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerHTML,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.toggle('is-active');

    }

};

select();

let buttons = document.querySelector('.btn_cont');
let input = document.querySelector('.cheked');
let result = document.querySelector('.result');
let inputTell = document.querySelector('.form_tel')
let resultTell = document.querySelector('.resultTell');


buttons.addEventListener('click', function() {
  if(input.value === "") {
    result.textContent = "Error: Fill in the empty floor";
    input.style.borderColor = "red"
  } else {
     result.textContent = "";
     inputTell.style.borderColor = "#BDBDBD"
  }
})

buttons.addEventListener('click', function() {
    if(inputTell.value === "") {
        resultTell.textContent = "Error: Fill in the empty floor";
        inputTell.style.borderColor = "red"
    } else {
        resultTell.textContent = "";
        inputTell.style.borderColor = "#BDBDBD"
    }
  })