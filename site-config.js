/**
 * Zoya's Threading — site settings
 *
 * Change the booking email on the line below only. The booking form uses it automatically.
 */
(function () {
  var BOOKING_EMAIL = "mekaeelahmad24@gmail.com";

  window.ZOYAS_SITE_CONFIG = {
    bookingEmail: BOOKING_EMAIL,
  };

  var form = document.getElementById("booking-form");
  if (form && BOOKING_EMAIL.trim()) {
    form.setAttribute(
      "action",
      "https://formsubmit.co/" + encodeURIComponent(BOOKING_EMAIL.trim())
    );
  }
})();
