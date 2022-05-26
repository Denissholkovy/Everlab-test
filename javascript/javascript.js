let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let ope = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
  ope.classList.toggle('active');
});



// gallery

document.addEventListener("DOMContentLoaded", function () {
  const slider = new ChiefSlider(".slider", {
    loop: true,
    autoplay: true,
    interval: 700000,
  });
});


//number msc

document.addEventListener("DOMContentLoaded", function () {
 
  var eventCalllback = function (e) {

      var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "+380 (__) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
       
      if (clearVal !== 'false' && e.type === 'blur') {
          if (val.length < matrix.match(/([\_\d])/g).length) {
              e.target.value = '';
              return;
          }
      }
      if (def.length >= val.length) val = def;
      e.target.value = matrix.replace(/./g, function (a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
  }

  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
      for (let ev of ['input', 'blur', 'focus']) {
          elem.addEventListener(ev, eventCalllback);
      }
  }
});


var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);