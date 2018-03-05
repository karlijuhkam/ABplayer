 $("body").append(
      '<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>'
    );
    $(window).on("load", function() {
      setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
    });
    function removeLoader() {
      $("#loadingDiv").fadeOut(400, function() {
        // fadeOut complete. Remove the loading div
        $("#loadingDiv").remove();
        $("#pleier").removeClass("hidden"); //makes page more lightweight
      });
    }