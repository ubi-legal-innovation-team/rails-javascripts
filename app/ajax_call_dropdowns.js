function call_notifications() {
// ----- Add dropdown content to DOM -----
  $("#user_notifications_call").submit(function(event) {
    // Prevent redirection
    event.preventDefault();

    var form = $(this),
        url  = $(form).attr("action"),
        type = $(form).attr("method");

    $.ajax({
      url: url,
      type: type,
      data: $(form).serialize(),
      beforeSend: function() {
        // add loader
      },
      success: function(data) {
        $(form).addClass('active');
        $(".dropdown-ajaxified.user_notifications_call").addClass('active shadow w-350 left');
        $(".dropdown-ajaxified.user_notifications_call").append(data);
        $('#notifications_count').remove();
      },
      completed: function() {
        // remove loader
      },
      error: function(data) {
        alert("Fatal Error");
      },
    });
    // ----- Remove dropdown content to DOM -----
    window.addEventListener('click', function(event){
      if ($(".dropdown-ajaxified.user_notifications_call").hasClass('active')) {
        if (!event.target.closest(".dropdown-ajaxified.user_notifications_call")){
          $(form).removeClass('active');
          $(".dropdown-ajaxified.user_notifications_call").removeClass('active shadow w-350 left');
          $('#user_notifications').remove();
        };
      };
    });
  });
};

function call_user_nav() {
// ----- Add dropdown content to DOM -----
  $("#user_nav_call").submit(function(event) {
    // Prevent redirection
    event.preventDefault();

    var form = $(this),
        url  = $(form).attr("action"),
        type = $(form).attr("method");

    $.ajax({
      url: url,
      type: type,
      data: $(form).serialize(),
      beforeSend: function() {
        // add loader
      },
      success: function(data) {
        $(form).addClass('active');
        $(".dropdown-ajaxified.user_nav_call").addClass('active shadow w-250 left');
        $(".dropdown-ajaxified.user_nav_call").append(data);
      },
      completed: function() {
        // remove loader
      },
      error: function(data) {
        alert("Fatal Error");
      },
    });
    // ----- Remove dropdown content to DOM -----
    window.addEventListener('click', function(event){
      if ($(".dropdown-ajaxified.user_nav_call").hasClass('active')) {
        if (!event.target.closest(".dropdown-ajaxified.user_nav_call")){
          $(form).removeClass('active');
          $(".dropdown-ajaxified.user_nav_call").removeClass('active shadow w-250 left');
          $('#user_nav').remove();
        };
      };
    });
  });
};

function call_menu_responsive() {
// ----- Add dropdown content to DOM -----
  $("#menu_responsive_call").submit(function(event) {
    // Prevent redirection
    event.preventDefault();

    var form = $(this),
        url  = $(form).attr("action"),
        type = $(form).attr("method");

    $.ajax({
      url: url,
      type: type,
      data: $(form).serialize(),
      beforeSend: function() {
        // add loader
      },
      success: function(data) {
        $(form).addClass('active');
        $(".dropdown-ajaxified.menu_responsive_call").addClass('active shadow w-250 left');
        $(".dropdown-ajaxified.menu_responsive_call").append(data);
      },
      completed: function() {
        // remove loader
      },
      error: function(data) {
        alert("Fatal Error");
      },
    });
    // ----- Remove dropdown content to DOM -----
    window.addEventListener('click', function(event){
      if ($(".dropdown-ajaxified.menu_responsive_call").hasClass('active')) {
        if (!event.target.closest(".dropdown-ajaxified.menu_responsive_call")){
          $(form).removeClass('active');
          $(".dropdown-ajaxified.menu_responsive_call").removeClass('active shadow w-250 left');
          $('#menu_responsive').remove();
        };
      };
    });
  });
};
