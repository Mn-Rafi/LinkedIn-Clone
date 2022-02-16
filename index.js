
function myFunction1() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function myFunction() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Show more ˅"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Show less ^"; 
      moreText.style.display = "inline";
    }
  }

  function myFunction2() {
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (more2.style.display === "block") {
      btnText.innerHTML = "Show more ˅";
      moreText.style.display = "none";
    } else {
      btnText.innerHTML = "Show less ^"; 
      moreText.style.display = "block";

    }
  }