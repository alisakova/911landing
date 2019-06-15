$("body").ready(function() {
  $("#request_form input[type='tel']").bind("change keyup input click", function() {
    if (this.value.match(/[^0-9+]/g)) {
      this.value = this.value.replace(/[^0-9+]/g, "");
    }
  });
});

var forms = document.querySelectorAll('.form');

forms.forEach(function(form) {
  form.addEventListener("submit", function(e) {
    var instance = $.fancybox.getInstance();
    e.preventDefault();
    if (instance) {
      instance.close();
      $.fancybox.open({
        src  : '#success-modal',
        type : 'inline'
      });
    }
  });
});
