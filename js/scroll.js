var elmnt = document.getElementById("outer-wrapper");
var wrapper = document.getElementById("wrapper");

/*----divs----*/
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");

function scrolling() {
  var scroll = elmnt.scrollTop / 2;
  //console.log(scroll);


  /*---DIV-2-TRANSITION---*/
  if (scroll >= 50) {
    two.style.opacity = "1";
  } else {
    two.style.opacity = "0";
  }

  /*---DIV-3-TRANSITION---*/
  if (scroll >= 500) {
    three.style.opacity = "1";
  } else {
    three.style.opacity = "0";
  }
  /*tablet*/
  if (window.matchMedia("(max-width: 800px)").matches) {
    if (scroll >= 150) {
      three.style.opacity = "1";
    } else {
      three.style.opacity = "0";
    }
  }
  /*phone*/
  if (window.matchMedia("(max-width: 400px)").matches) {
    if (scroll >= 80) {
      three.style.opacity = "1";
    } else {
      three.style.opacity = "0";
    }
  }

  /*---DIV-4-TRANSITION---*/
  if (scroll >= 900) {
    four.style.opacity = "1";
  } else {
    four.style.opacity = "0";
  }
  /*tablet*/
  if (window.matchMedia("(max-width: 800px)").matches) {
    if (scroll >= 400) {
      four.style.opacity = "1";
    } else {
      four.style.opacity = "0";
    }
  }
  /*phone*/
  if (window.matchMedia("(max-width: 400px)").matches) {
    if (scroll >= 200) {
      four.style.opacity = "1";
    } else {
      four.style.opacity = "0";
    }
  }

  /*---DIV-5-TRANSITION---*/
  if (scroll >= 1500) {
    five.style.opacity = "1";
  } else {
    five.style.opacity = "0";
  }
  /*tablet*/
  if (window.matchMedia("(max-width: 800px)").matches) {
    if (scroll >= 850) {
      five.style.opacity = "1";
    } else {
      five.style.opacity = "0";
    }
  }
  /*phone*/
  if (window.matchMedia("(max-width: 400px)").matches) {
    if (scroll >= 425) {
      five.style.opacity = "1";
    } else {
      five.style.opacity = "0";
    }
  }

  /*---DIV-6-TRANSITION---*/
  if (scroll >= 2200) {
    six.style.opacity = "1";
  } else {
    six.style.opacity = "0";
  }
  /*tablet*/
  if (window.matchMedia("(max-width: 800px)").matches) {
    if (scroll >= 1000) {
      six.style.opacity = "1";
    } else {
      six.style.opacity = "0";
    }
  }
  /*phone*/
  if (window.matchMedia("(max-width: 400px)").matches) {
    if (scroll >= 550) {
      six.style.opacity = "1";
    } else {
      six.style.opacity = "0";
    }
  }


}
