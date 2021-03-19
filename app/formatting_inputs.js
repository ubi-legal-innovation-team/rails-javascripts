function formattingNumericInput() {
 $(".format-num").on("keypress keyup blur",function (event) {
    $(this).val($(this).val().replace(/[^\d.]/, ""));
  });
};
