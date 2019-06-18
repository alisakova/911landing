function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$("body").ready(function() {
  $("input[type='tel']").bind("change keyup input click", function() {
    if (this.value.match(/[^0-9+]/g)) {
      this.value = this.value.replace(/[^0-9+]/g, "");
    }
  });
});

$(document).on("submit", "#request_form, #presentation_form, #tasting_form, #call_form", function(event) {
  var name = $(this).find('._name').val();
  var tel = $(this).find('._tel').val();
  $.ajax({
    type: "POST",
    url: "/request",
    data: {
      question: $(this).data('name'),
      name: name,
      phone: tel,
      utm_source: getParameterByName("utm_source"),
      utm_term: getParameterByName("utm_term")
    },
    dataType: "JSON",
    beforeSend: function() {
      yaCounter49624201.reachGoal("ordersent");
      ga("send", "ordersent", "order");
      $(this).attr("disabled", "disabled");
    },
    success: function(data) {
      console.log(data);
      $(this).removeAttr("disabled");
      $('input').val();
      var instance = $.fancybox.getInstance();
      if (instance) {
        instance.close();
        $.fancybox.open({
          src  : '#success-modal',
          type : 'inline'
        });
      }
    }
  });

  event.preventDefault();
  return false;
});
