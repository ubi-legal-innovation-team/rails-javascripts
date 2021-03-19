
function openModal(body) {
  var open_modal       = $('.open-modal'),
      close_modal      = $('.close-modal');

  open_modal.click(function(){
    var background_modal = $(`#${$(this).attr('class').split(' ')[$(this).attr('class').split(' ').length -1]}`),
        modal            = background_modal.find('.modal-container');

    // Add modal to the view
    background_modal.addClass('active');
    setTimeout(function(){modal.addClass('active');}, 50);
    body.addClass('hidden-overflow');
  });

  close_modal.click(function(){

    // Remove modal from the view
    var background_modal = $(`#${$(this).attr('class').split(' ')[$(this).attr('class').split(' ').length -1]}`),
        modal            = background_modal.find('.modal-container');

    modal.removeClass('active');
    setTimeout(function(){background_modal.removeClass('active');}, 100);
    body.removeClass('hidden-overflow');
  });
};
