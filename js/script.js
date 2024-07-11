var body = document.querySelector("body");
var footbar = document.querySelector(".navbar");

function detectScrollY() {
  var scrollY = window.scrollY;

  if (scrollY < 1) {
    scrollTo(scrollY, 0);
    body.classList.add("max-vh-100", "overflow-hidden");
    footbar.classList.add("d-none");
  } else {
    body.classList.remove("max-vh-100", "overflow-hidden");
    footbar.classList.remove("d-none");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  detectScrollY();
});

function openInvitation() {
  body.classList.remove("max-vh-100", "overflow-hidden");
  footbar.classList.remove("d-none");
}

// Baca ada di scrollY berapa dan bakal jalanin fungsi detectY setiap di scroll
window.addEventListener("scroll", detectScrollY);


// Countdown
$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = moment("2030-02-25 23:59:59").toDate();

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements with id="days", "hours", "minutes", and "seconds"
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            $("#countdown").text("EXPIRED");
        }
    }, 1000);
});

