$(".imghobe").hide(".container");

$("button").click(function () {
  $(".imghobe").show(1000);
});

$(".start").click(function () {
  $(".naiami").show(1000);
});

$(".end").click(function () {
  $(".naiami").hide(1000);
});

$(".comapir").click(function () {
  $(".naiami").toggle(1000);
});

$(".fadey").click(function () {
  $(".naiami").fadeIn(1000);
});

$(".farde").click(function () {
  $(".naiami").fadeOut(1000);
});

$(".fader").click(function () {
  $(".naiami").fadeToggle(1000);
});

$(".slide").click(function () {
  $(".naiami").slideDown(1000);
});

$(".slidey").click(function () {
  $(".naiami").slideUp(1000);
});

$(".slider").click(function () {
  $(".naiami ").slideToggle(1000);
});

$(".nayeeem").click(function () {
  $(".naiami").hide(1000);
});

$(".nayeeem").click(function () {
  $(".imghobe").addClass("hurray");
});

$(".nayeeema").click(function () {
  $(".imghobe").removeClass("hurray");
});

//========================

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/11/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      const now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0);
})();

//============================



$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, 40);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});
