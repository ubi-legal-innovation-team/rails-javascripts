
const dropdownable = (active_dropdownable) => {
  if(active_dropdownable){
    active_dropdownable.forEach(function(element,index){

      element.addEventListener('click', function(){
        element.classList.toggle('active');
        $(element.parentNode).nextAll('.dropdown-element')[0].classList.toggle('dropdownable');
      });

    })
  };
};

const openDropdown = (event,uniq_dropdowns,uniq_open_dropdown) => {
  var dropdown = document.querySelector('.' + event.currentTarget.getAttribute('id'));
  uniq_dropdowns.push(dropdown);

  uniq_dropdowns.forEach(element => {
    var dropdownable = false;
    dropdownable     = element.className.includes(event.currentTarget.getAttribute('id'));

    if (dropdownable){
      element.classList.add('active');
      if (event.currentTarget.querySelector('i')) {
        event.currentTarget.querySelector('i').style.transform = "rotate(180deg)";
      }
    } else {
      element.classList.remove('active');
      if (event.currentTarget.querySelector('i')) {
        event.currentTarget.querySelector('i').style.transform = "rotate(0deg)";
      }
    }
  });

  uniq_open_dropdown.forEach(element => {
    if (element == event.currentTarget) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
};

const closeAllDropdowns = (event,uniq_dropdowns,uniq_open_dropdown) => {
  uniq_dropdowns.forEach(element => {
    element.classList.remove('active');
  });
  uniq_dropdowns = [];

  uniq_open_dropdown.forEach(element => {
    element.classList.remove('active');
    if (element.querySelector('i')) {
      element.querySelector('i').style.transform = "rotate(0deg)";
    }
  });

};
