//= require jquery

//= require_tree ./app


document.addEventListener('turbolinks:load', () => {

// carousel.js

  var labels = document.querySelectorAll('.carousel label');
  var right  = document.querySelector('.carousel .carousel-right');
  var left   = document.querySelector('.carousel .carousel-left');
  var count  = 1;

  if (labels) {
    labels.forEach(element => {
      element.addEventListener('click',function(){slidesNavigationCarousel(event,labels,this)}, false)
    });
  };

  if (right && left) {
    arrowNavigationCarousel(right,left,count,labels);
  };


// dropdowns.js

  var active_dropdownable = document.querySelectorAll('.dropdownable-svg svg'),
      uniq_open_dropdown  = document.querySelectorAll('.open-dropdown'),
      uniq_dropdowns      = [];

  if (active_dropdownable) {
    dropdownable(active_dropdownable);
  }

  if (uniq_open_dropdown) {
    uniq_open_dropdown.forEach(element => {
      element.addEventListener('click',function(){openDropdown(event,uniq_dropdowns,uniq_open_dropdown)}, false);
    });

    window.addEventListener('click', function(event){
      if (!event.target.matches('.open-dropdown') &&
          !event.target.matches('path') &&
          !event.target.matches('svg')) {
        closeAllDropdowns(event,uniq_dropdowns,uniq_open_dropdown)
      }
    }, false);
  };

// flashes.js

  displayFlashes();

// form_validations.js

  var form = document.querySelectorAll('.DOM_validation-form');

  if(form){
    form.forEach(f => {
      var button = f.querySelector('input[type="submit"]');
      var required_inputs = f.querySelectorAll('.required-input').length > 0 ? f.querySelectorAll('.required-input') : null ;
      var optional_inputs = f.querySelectorAll('.optional-input').length > 0 ? f.querySelectorAll('.optional-input') : null ;

      button.addEventListener('click', function(){formValidations(event,required_inputs,optional_inputs,button)}, false);
    })
  };

// formatting_inputs.js

  formattingNumericInput();

// modals.js

  var body = $('body');
  body.removeClass('hidden-overflow');
  openModal(body);

// pop_ups.js

  var uniq_open_pop_up  = document.querySelectorAll('.open-pop-up'),
      uniq_pop_ups      = [];

  if (uniq_open_pop_up) {
    uniq_open_pop_up.forEach(element => {
      element.addEventListener('click',function(){openPopUp(event,uniq_pop_ups)}, false);
    });

    window.addEventListener('click', function(event){
      if (!event.target.matches('.open-pop-up') &&
          !event.target.matches('path') &&
          !event.target.matches('svg')) {
        closeAllPopUps(event,uniq_pop_ups)
      }
    }, false);
  };

// prevent_default.js

  preventDefault();

});
